import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  
  async findOneByEmail(email): Promise<any> {
    return this.usersRepository.findOneByEmail(email);
  }

  async findOne(id): Promise<any> {
    return this.usersRepository.findOne(id);
  }

  async findAll(): Promise<any> {
    return this.usersRepository.findAll();
  }

  async createOne(user): Promise<any> {
    const createOne = await this.usersRepository.createOne(user);
    return createOne;
  }
}
