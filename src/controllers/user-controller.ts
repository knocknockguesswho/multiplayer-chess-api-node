import { Request, Response } from 'express';
import { User } from 'Handlers';

export default class UserInfoController {
  public static async getAll(_: Request, res: Response) {
    const data = await User.getAll();
    res.status(data.result.statusCode);
    res.send(data.result);
  }

  public static async getById(req: Request, res: Response) {
    const data = await User.getById(req.params['id']);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async updateUserInfo(req: Request, res: Response) {
    const data = await User.updateUserInfo({ id: req.session['userId'], data: req.body });
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAccount(req: Request, res: Response) {
    const data = await User.deactiveAccount(req.session['userId']);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAll(_: Request, res: Response) {
    const data = await User.deactivateAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async addFriendById(req: Request, res: Response) {
    const data = await User.addFriendById({ userId: req.session['userId'], friendId: req.body['friend_id'] });
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
