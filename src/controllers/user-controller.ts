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

  public static async updateById(req: Request, res: Response) {
    const data = await User.updateById({ id: req.params['id'], data: req.body });
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateById(req: Request, res: Response) {
    const data = await User.deactivateById(req.params['id']);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAll(_: Request, res: Response) {
    const data = await User.deactivateAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
