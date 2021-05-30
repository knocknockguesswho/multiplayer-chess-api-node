import mongoose, { Schema, Document } from 'mongoose';
export interface IUserModel extends Document {
  first_name: string;
  last_name: string;
  username: string;
  password?: string;
  avatar?: string;
  rank_point?: number;
  friend_list?: Array<string>; // ObjectId
  game_history?: Array<string>; // chess_notation
}

const USER_COLLECTION_SCHEMA: Schema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
    default: null,
  },
  rank_point: {
    type: Number,
    default: null,
  },
  friend_list: {
    type: Array,
  },
  game_history: {
    type: Array,
  },
});
export const UserModel = mongoose.model<IUserModel>('user', USER_COLLECTION_SCHEMA);
