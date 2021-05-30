import jwt from 'jsonwebtoken';
import { IUserModel } from 'Models/user-collection';

type DecodedToken = Omit<IUserModel, '_id'>;

export default class JWTHelper {
  public token: string;
  public data: DecodedToken;
  public userId: string;
  constructor(token: string) {
    this.token = token;
  }
  public decodeToken() {
    const data = jwt.decode(this.token);
    this.data = data['data'];
    this.userId = data['data']['_id'];
  }
}