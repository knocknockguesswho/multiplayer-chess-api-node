import { Request, Response } from 'express';
import { signinSchema } from 'Validators/form-validator';
import { UserModel } from 'Models/user-collection';
import ResponseHelper from 'Helpers/response-helper';

// DISINI KIRIM NEXT ATAU ERROR.
export default class SigninValidation {
  public static async validate(req: Request, res: Response, next: () => Promise<any>) {
    const responseResult = new ResponseHelper();
    try {
      const { username } = req.body;
      const isExist = await UserModel.exists({ username });
      if (!isExist) throw new Error('Username is not registered yet. Please signup first.');
      await signinSchema.validateAsync(req.body, { abortEarly: false });
      return next();
    } catch (err) {
      responseResult.setToFailed(err);
      responseResult.setStatusCode(400);
      res.status(responseResult.result.statusCode);
      res.send(responseResult.result);
      return responseResult;
    }
  }
}