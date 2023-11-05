import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm"
import { User } from './entities/user.entity';
import { UsersInteface } from './interfaces';


@Injectable()
export class UsersService implements UsersInteface{
  constructor(
    @InjectRepository(User)
    private readonly userEntity: Repository<User>
  ){}

  async getUsers(): Promise<any> {
      
  }

  async registerUser(body: CreateUserDto): Promise<any> {
    const createUser = await this.userEntity.create(body)
    return this.userEntity.save(body);
  }


}
