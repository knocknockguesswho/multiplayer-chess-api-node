import ResponseHelper from 'Helpers/response-helper';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config, jwtConfig } from 'Config';
import { IUserModel, UserModel } from 'Models/user-collection';

export default class AuthHandler {
  public static async signup(input: IUserModel) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const inputData = input;
    const inputPassword: string = inputData['password'];

    const passwordHash = bcrypt.hashSync(inputPassword, config.general.bcryptSaltRounds);
    inputData['password'] = passwordHash;
    const result: IUserModel = await inputData.save();
    responseResult.setData(result);
    return responseResult;
  }

  public static async signin(input: Pick<IUserModel, 'username' | 'password'>) {
    const responseResult: ResponseHelper = new ResponseHelper();
    const data = await UserModel.findOne({ username: input['username'] });
    const passwordMatch = await bcrypt.compare(input['password'], data.password);
    if (passwordMatch) {
      const token = jwt.sign({ data }, jwtConfig.JWT_SECRET_KEY, jwtConfig.jwtOptions);
      responseResult.setData({ token });
    } else {
      responseResult.setToFailed({ message: 'Username and/or password invalid', statusCode: 400 });
    }
    return responseResult;
  }
}
