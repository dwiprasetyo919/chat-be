import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from '../auth/dto/register-user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('api/v1/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }

  @Post('auth/register')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.register(registerUserDto);
  }
}
