import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { ChatsRepository } from './chats.repository';
import { ObjectId } from 'mongoose';
@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async createChat(createChatDto: CreateChatDto) {
    return await this.chatsRepository.createChat(createChatDto);
  }

  async findAllChats(id: string) {
    return await this.chatsRepository.findAllChats(id);
  }

  async deleteMember(id: string, userId: string) {
    return await this.chatsRepository.deleteMember(id, userId);
  }

  async deleteChat(id: string) {
    return await this.chatsRepository.deleteChat(id);
  }
  
}
