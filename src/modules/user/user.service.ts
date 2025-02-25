import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {

  }

  async login(loginUserDto: LoginUserDto) {
  
  }

  async remove(id: number) {

  }
}
