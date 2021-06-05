import { Request } from 'express';
import ResponseHelper, { ResponseData } from 'Helpers/response-helper';
import { UserModel } from 'Models/user-collection';

export default class UserHandler {
  public static async getAll() {
    const responseResult = new ResponseHelper();
    const result: any = await UserModel.find().select('-password -__v');
    responseResult.setData(result);
    return responseResult;
  }

  public static async getById(request: Request) {
    const responseResult = new ResponseHelper();
    const userId = request.params['id'];
    const result: any = await UserModel.findById(userId).select('-password -__v');
    if (result) {
      responseResult.setData(result);
    } else {
      responseResult.setToFailed({ message: 'User not found', statusCode: 400 });
    }
    return responseResult;
  }

  public static async updateUserInfo(request: Request) {
    const responseResult = new ResponseHelper();
    const userId = request.session['userId'];
    const data = request.body;
    try {
      await UserModel.findByIdAndUpdate(userId, data);
      responseResult.setMessage('Success update user data with id: ' + userId);
    } catch (err) {
      responseResult.setToFailed({ message: err, statusCode: 400 });
    }
    return responseResult;
  }

  public static async deactiveAccount(request: Request) {
    const responseResult = new ResponseHelper();
    const userId = request.session['userId'];
    try {
      await UserModel.deleteOne({ _id: userId });
      responseResult.setMessage('Success deactivate user');
    } catch (err) {
      responseResult.setToFailed({ message: err, statusCode: 400 });
    }
    return responseResult;
  }

  public static async deactivateAll() {
    const responseResult = new ResponseHelper();
    try {
      await UserModel.deleteMany({});
      responseResult.setMessage('Success deactivate all users');
    } catch (err) {
      responseResult.setToFailed({ message: err, statusCode: 500 });
    }
    return responseResult;
  }
}
