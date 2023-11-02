import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDo } from 'src/_schemas/user.do';

export class UsersRepository {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDo>,
  ) {}

  async findOneByEmail(email): Promise<any> {
    const findOne = await this.userModel.findOne({ email: email });
    return findOne;
  }

  async findAll(): Promise<any> {
    const findAll = await this.userModel.find();
    return findAll;
  }

  async findOne(id): Promise<any> {
    const findOne = await this.userModel.findOne({ _id: id });
    return findOne;
  }

  async createOne(user): Promise<any> {
    const createOne = await this.userModel.create(user);
    return createOne;
  }
}
