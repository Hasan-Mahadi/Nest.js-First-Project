import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: CreateUserDto[] = [];

  create(userData: CreateUserDto) {
    this.users.push(userData);
    return {
      message: 'User created successfully!',
      data: userData,
    };
  }

  findAll() {
    return this.users;
  }
}
