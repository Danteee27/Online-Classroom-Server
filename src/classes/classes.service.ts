import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";
import {
  AddClassMembershipDto,
  CreateAssignmentDto,
  CreateClassDto,
  InviteClassMembershipDto,
} from "./dto/create-class.dto";
import { EntityCondition } from "src/utils/types/entity-condition.type";
import { NullableType } from "src/utils/types/nullable.type";
import { ClassMembership } from "./entities/class-membership.entity";
import { UsersService } from "src/users/users.service";
import { MailService } from "src/mail/mail.service";
import { ClassMembershipRole } from "./enums/class-membership-role.enum";
import { Assignment } from "./entities/assignment.entity";
import { ClassMembershipAssignment } from "./entities/class-membership-assignment.entity";
import { User } from "src/users/entities/user.entity";
import { UpdateAssignmentDto } from "./dto/update-class.dto";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    private usersService: UsersService,
    private mailService: MailService,
    @InjectRepository(ClassMembership)
    private classMembershipRepository: Repository<ClassMembership>,
    @InjectRepository(Assignment)
    private assignmentRepository: Repository<Assignment>,
    @InjectRepository(ClassMembershipAssignment)
    private classMembershipAssignmentRepository: Repository<ClassMembershipAssignment>
  ) {}

  async create(createClassDto: CreateClassDto): Promise<Class> {
    let classEntity = this.classRepository.create(createClassDto);
    classEntity = await this.classRepository.save(classEntity);
    console.log("why", createClassDto);
    console.log("why", classEntity);

    const user = await this.usersService.findOne({
      id: +createClassDto.userId,
    });
    if (!user) {
      throw new HttpException("User not found", 404);
    }

    const classMembership = this.classMembershipRepository.create({
      user,
      class: classEntity,
      role: ClassMembershipRole.TEACHER,
    });

    classEntity.classMemberships = [classMembership];
    user.classMemberships = [...user.classMemberships, classMembership];

    await this.classRepository.save(classEntity);
    await this.usersService.update(user.id, user);
    await this.classMembershipRepository.save(classMembership);

    return classEntity;
  }

  findAll(): Promise<NullableType<Class[]>> {
    return this.classRepository.find({
      relations: ["classMemberships"],
    });
  }

  findOne(fields: EntityCondition<Class>): Promise<NullableType<Class>> {
    return this.classRepository.findOne({
      where: fields,
      relations: ["classMemberships", "assignments"],
    });
  }

  async addClassMembership(
    id: Class["id"],
    addMembershipDto: AddClassMembershipDto
  ): Promise<Class> {
    let classEntity = await this.classRepository.findOne({
      where: { id },
      relations: ["classMemberships"],
    });
    if (!classEntity) {
      throw new HttpException("Class not found", 404);
    }
    let user = await this.usersService.findOne({
      id: +addMembershipDto.userId,
    });
    if (!user) {
      throw new HttpException("User not found", 404);
    }

    if (
      classEntity.classMemberships.find(
        (classMembership) =>
          classMembership.user.id === +addMembershipDto.userId
      )
    ) {
      throw new HttpException("User already in class", 400);
    }

    let classMembership = await this.classMembershipRepository.save(
      this.classMembershipRepository.create({
        user,
        class: classEntity,
        role: addMembershipDto.role,
      })
    );

    classEntity.classMemberships.push(classMembership);

    return await this.classRepository.save(classEntity);
  }

  async inviteClassmembership(
    inviteClassMembershipDto: InviteClassMembershipDto
  ): Promise<any> {
    let classEntity = await this.classRepository.findOne({
      where: { id: +inviteClassMembershipDto.classId },
      relations: ["classMemberships"],
    });
    if (!classEntity) {
      throw new HttpException("Class not found", 404);
    }
    let user = await this.usersService.findOne({
      email: inviteClassMembershipDto.email,
    });
    if (!user) {
      throw new HttpException("User not found", 404);
    }

    let inviter = await this.usersService.findOne({
      id: +inviteClassMembershipDto.inviterId,
    });
    if (!inviter) {
      throw new HttpException("Inviter not found", 404);
    }

    const inviterClassMembership = inviter.classMemberships.find(
      (classMembership) =>
        classMembership.class.id === +inviteClassMembershipDto.classId
    );

    if (
      inviterClassMembership?.role !== ClassMembershipRole.TEACHER ||
      inviterClassMembership.class.id !== classEntity.id
    ) {
      throw new HttpException("Inviter is not a teacher of this class", 400);
    }

    if (
      classEntity.classMemberships.find(
        (classMembership) => classMembership.user.id === user?.id
      )
    ) {
      throw new HttpException("User already in class", 400);
    }

    this.mailService.classInvitation({
      to: inviteClassMembershipDto.email,
      data: {
        userId: user.id,
        role: inviteClassMembershipDto.role,
        inviter: inviter.firstName + " " + inviter.lastName,
        className: classEntity.className,
        inviterId: inviter.id,
      },
    });
  }

  async update(id: Class["id"], updateClassDto: CreateClassDto) {
    let classEntity = await this.classRepository.findOne({
      where: { id },
      relations: ["classMemberships"],
    });
    if (!classEntity) {
      throw new HttpException("Class not found", 404);
    }

    classEntity = this.classRepository.merge(classEntity, updateClassDto);

    return await this.classRepository.save(classEntity);
  }

  async createAssignment(
    classId: Class["id"],
    createAssignmentDto: CreateAssignmentDto
  ): Promise<Assignment> {
    let classEntity = await this.classRepository.findOne({
      where: { id: +classId },
      relations: [
        "classMemberships",
        "assignments",
        "classMemberships.classMembershipAssignments",
      ],
    });
    if (!classEntity) {
      throw new HttpException("Class not found", 404);
    }

    let creator = await this.usersService.findOne({
      id: +createAssignmentDto.creatorId,
    });

    if (!creator) {
      throw new HttpException("Creator not found", 404);
    }

    let assignment = this.assignmentRepository.create({
      ...createAssignmentDto,
      class: classEntity,
      creator: creator,
      createdDate: new Date(),
    });
    await this.assignmentRepository.save(assignment);

    classEntity.assignments = [...classEntity.assignments, assignment];
    creator.assignments = [...creator.assignments, assignment];

    classEntity.classMemberships.forEach(async (classMembership) => {
      let classMembershipAssignment =
        await this.classMembershipAssignmentRepository.save(
          this.classMembershipAssignmentRepository.create({
            classMembership,
            assignment,
          })
        );
      classMembership.classMembershipAssignments = [
        ...classMembership.classMembershipAssignments,
        classMembershipAssignment,
      ];
    });

    await this.classRepository.save(classEntity);
    await this.usersService.update(creator.id, creator);
    await this.classMembershipRepository.save(classEntity.classMemberships);

    return assignment;
  }

  async updateClassMembershipAssignment(
    classId: Class["id"],
    assignmentId: Assignment["id"],
    classMembershipId: ClassMembership["id"],
    updateClassMembershipAssignmentDto: Partial<ClassMembershipAssignment>
  ): Promise<ClassMembershipAssignment> {
    if (!assignmentId || !classMembershipId) {
      throw new HttpException("Missing assignmentId or classMembershipId", 400);
    }
    const classMembershipAssignment =
      await this.classMembershipAssignmentRepository.findOne({
        where: {
          assignment: { id: +assignmentId },
          classMembership: { id: +classMembershipId },
        },
      });

    if (!classMembershipAssignment) {
      throw new HttpException("ClassMembershipAssignment not found", 404);
    }

    const updatedClassMembershipAssignment =
      this.classMembershipAssignmentRepository.merge(
        classMembershipAssignment,
        updateClassMembershipAssignmentDto
      );

    return this.classMembershipAssignmentRepository.save(
      updatedClassMembershipAssignment
    );
  }

  async updateAssignment(
    classId: Class["id"],
    assignmentId: Assignment["id"],
    updateAssignmentDto: UpdateAssignmentDto
  ): Promise<Assignment> {
    if (!assignmentId) {
      throw new HttpException("Missing assignmentId", 400);
    }
    const assignment = await this.assignmentRepository.findOne({
      where: { id: +assignmentId, class: { id: +classId } },
    });

    if (!assignment) {
      throw new HttpException("Assignment not found", 404);
    }

    const updatedAssignment = this.assignmentRepository.merge(
      assignment,
      updateAssignmentDto
    );

    return this.assignmentRepository.save(updatedAssignment);
  }
}
