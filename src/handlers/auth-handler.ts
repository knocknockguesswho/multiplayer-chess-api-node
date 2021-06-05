import ResponseHelper from 'Helpers/response-helper';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config, jwtConfig } from 'Config';
import { IUserModel, UserModel } from 'Models/user-collection';
import { Request } from 'express';
import RedisHelper from 'Helpers/redis-helper';

export default class AuthHandler {
  public static async signup(request: Request) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const inputData: IUserModel = new UserModel(request.body);
    const inputPassword: string = inputData['password'];

    const passwordHash = bcrypt.hashSync(inputPassword, config.general.bcryptSaltRounds);
    inputData['password'] = passwordHash;
    const result: IUserModel = await inputData.save();
    responseResult.setData(result);
    return responseResult;
  }

  public static async signin(request: Request) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const inputData: IUserModel = new UserModel(request.body);
    const { _id, password } = await UserModel.findOne({ username: inputData['username'] });
    const passwordMatch = await bcrypt.compare(inputData['password'], password);
    if (passwordMatch) {
      const token = jwt.sign({ userId: _id }, config.jwt.secret, jwtConfig.options);
      const refreshToken = jwt.sign({ userId: _id }, config.jwt.refreshSecret, jwtConfig.refreshOptions);
      request.session['userId'] = _id;
      request.session['refresh_token'] = refreshToken;
      responseResult.setData({ token, refreshToken });
    } else {
      responseResult.setToFailed({ message: 'Username and/or password invalid', statusCode: 400 });
    }
    return responseResult;
  }

  public static async signout(request: Request) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const sessionId = request.sessionID;
    try {
      await RedisHelper.del('sess:' + sessionId);
      responseResult.setMessage('Success remove session!');
    } catch (err) {
      responseResult.setToFailed({ message: err, statusCode: 500 });
    }
    return responseResult;
  }

  public static async refreshToken(request: Request) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const refreshToken = request.body['refresh_token'];
    try {
      if (refreshToken !== request.session['refresh_token']) throw new Error('Token Invalid!');
      const decoded = jwt.verify(refreshToken, config.jwt.refreshSecret, jwtConfig.refreshOptions);
      const token = jwt.sign({ userId: decoded['userId'] }, config.jwt.secret, jwtConfig.refreshOptions);
      responseResult.setStatusCode(200);
      responseResult.setData({ token });
      delete request.session['refresh_token'];
      request.session['token'] = token;
    } catch (err) {
      responseResult.setMessage(err.message);
      responseResult.setStatusCode(403);
    }
    return responseResult;
  }
}
