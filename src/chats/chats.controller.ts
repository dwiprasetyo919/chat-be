import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ObjectId } from 'mongoose';
@ApiTags('Chats')
@ApiBearerAuth('defaultBearerAuth')
@Controller('api/v1/')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}
  @UseGuards(JwtAuthGuard)
  @Post('chats')
  @ApiResponse({
    status: 201,
    description: 'The chat has been successfully created.',
  })
  async createChat(@Body() createChatDto: CreateChatDto) {
    return await this.chatsService.createChat(createChatDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('chats/:userId')
  async getAllChatsByUserId(@Param('userId') id: string) {
    return await this.chatsService.findAllChats(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Delete('chats/:id')
  async getDeleteChatById(@Param('id') id: string) {
    return await this.chatsService.deleteChat(id);
  }

  @Delete('chats/:id/:userId')
  async getDeleteMemberByUserId(
    @Param('id') id: string,
    @Param('userId') userId: string,
  ) {
    return await this.chatsService.deleteMember(id, userId);
  }

  
}
