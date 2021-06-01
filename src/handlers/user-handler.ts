import ResponseHelper, { ResponseData } from 'Helpers/response-helper';
import { UserModel } from 'Models/user-collection';

export default class UserHandler {
  public static async getAll() {
    const responseResult = new ResponseHelper();
    const result: any = await UserModel.find();
    responseResult.setData(result);
    return responseResult;
  }

  public static async getById(input: string) {
    const responseResult = new ResponseHelper();
    const result: any = await UserModel.findById(input);
    if (result) {
      responseResult.setData(result);
    } else {
      responseResult.setToFailed({ message: 'User not found', statusCode: 400 });
    }
    return responseResult;
  }

  public static async updateUserInfo(input: { id: string; data: ResponseData }) {
    const responseResult = new ResponseHelper();
    await UserModel.findByIdAndUpdate(input['id'], input.data);
    responseResult.setMessage('Success update user data with id: ' + input['id']);
    return responseResult;
  }

  public static async deactiveAccount(input: string) {
    const responseResult = new ResponseHelper();
    await UserModel.deleteOne({ _id: input });
    responseResult.setMessage('Success deactivate user');
    return responseResult;
  }

  public static async deactivateAll() {
    const responseResult = new ResponseHelper();
    await UserModel.deleteMany({});
    responseResult.setMessage('Success deactivate all users');
    return responseResult;
  }

  public static async addFriendById(input: { userId: string; friendId: string }) {
    const responseResult = new ResponseHelper();
    return responseResult;
  }
}
