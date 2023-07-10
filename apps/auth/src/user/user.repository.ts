import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import {
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  SaveOptions,
  Connection,
} from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

// It can be Adapter if extended from a custom implementation for mongoose

@Injectable()
export class UsersRepository {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = new this.userModel(createUserDto);
    return user.save();
    // create user using mongoose model
  }

  async findOne(id: number): Promise<any> {
    // find user using mongoose model
    return this.userModel.find({ userId: id });
  }

}