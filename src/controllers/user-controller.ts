import { Request, Response } from 'express';
import * as handler from 'Handlers';

export default class UserInfoController {
  public static async getAll(_, res: Response) {
    const data = await handler.User.getAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async getById(req: Request, res: Response) {
    const data = await handler.User.getById(req.params['id']);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async updateById(req: Request, res: Response) {
    const data = await handler.User.updateById({ id: req.params['id'], data: req.body });
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateById(req: Request, res: Response) {
    const data = await handler.User.deactivateById(req.params['id']);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async deactivateAll(req: Request, res: Response) {
    const data = await handler.User.deactivateAll();
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
