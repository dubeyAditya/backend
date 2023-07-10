import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository) {}

  async createUser(request: CreateUserDto) {
  
    const user = await this.usersRepository.create({
      ...request,
      password: await bcrypt.hash(request.password, 10),
    });
    return user;
  }

  async findUser(id: number) {
    return this.usersRepository.findOne(id);
  }

}
