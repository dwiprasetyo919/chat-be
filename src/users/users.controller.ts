import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags, ApiBearerAuth,ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Users')
@ApiBearerAuth('defaultBearerAuth')
@Controller('api/v1/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(JwtAuthGuard)
  @Get('users')
  async getUser() {
    const user = await this.usersService.findAll();
    return user;
  }
  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    return user;
  }
}
