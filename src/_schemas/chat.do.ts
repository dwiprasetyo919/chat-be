import { Types } from 'mongoose';

export class ChatDo {
  _id: Types.ObjectId;
  name: string;
  members: Array<Types.ObjectId>;

  constructor(props: Partial<ChatDo>) {
    this._id = props._id || null;
    this.name = props.name || null;
    this.members = props.members || null;
  }
}
