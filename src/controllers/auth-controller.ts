import AuthHandler from 'Handlers/auth-handler';
import JWTHelper from 'Helpers/jwt-helper';
import { Request, Response } from 'express';
import { IUserModel, UserModel } from 'Models/user-collection';

export default class AuthController {
  public static async signup(req: Request, res: Response) {
    const signupDetail: IUserModel = new UserModel(req.body);
    const data = await AuthHandler.signup(signupDetail);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async signin(req: Request, res: Response) {
    const signinDetail: IUserModel = new UserModel(req.body);
    const data = await AuthHandler.signin(signinDetail);
    const token: JWTHelper = new JWTHelper(data.result.data['token']);
    token.decodeToken();
    req.session['userId'] = token.userId;
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
