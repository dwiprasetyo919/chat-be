import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, isValidObjectId } from 'mongoose';
import { ChatDo } from 'src/_schemas/chat.do';

export class ChatsRepository {
  constructor(
    @InjectModel('Chat')
    private chatModel: Model<ChatDo>,
  ) {}

  async createChat(chat): Promise<any> {
    const createOne = await this.chatModel.create(chat);
    return createOne;
  }

  async findAllChats(id): Promise<any> {
    const findAll = await this.chatModel.find({ members: { $all: [id] } });
    return findAll;
  }

  async deleteMember(id, userId): Promise<any> {
    const chat = await this.chatModel.findOne({
      $and: [{ _id: id }, { members: { $all: [userId] } }],
    })
    chat.members.splice(userId, 1);
    const members = chat.members;  
    const update = await this.chatModel.updateOne(
      { _id: id },
      {
        $set: {
          members: members
        }
      }
    );
    return update;
  }

  async deleteChat(id): Promise<any> {
    const chat = await this.chatModel.deleteOne({ _id: id });
    return chat;
  }
}
