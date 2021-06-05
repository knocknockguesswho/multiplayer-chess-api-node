import { Request, Response } from 'express';
import { User } from 'Handlers';

export default class UserInfoController {
  public static async getAll(_: Request, res: Response) {
    const data = await User.getAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async getById(req: Request, res: Response) {
    const data = await User.getById(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async updateUserInfo(req: Request, res: Response) {
    const data = await User.updateUserInfo(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAccount(req: Request, res: Response) {
    const data = await User.deactiveAccount(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAll(_: Request, res: Response) {
    const data = await User.deactivateAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
