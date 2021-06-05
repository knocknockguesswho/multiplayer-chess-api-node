import { Auth } from 'Handlers';
import { Request, Response } from 'express';

export default class AuthController {
  public static async signup(req: Request, res: Response) {
    const data = await Auth.signup(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async signin(req: Request, res: Response) {
    const data = await Auth.signin(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async signout(req: Request, res: Response) {
    const data = await Auth.signout(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }

  public static async refreshToken(req: Request, res: Response) {
    const data = await Auth.refreshToken(req);
    res.status(data.result.statusCode);
    return res.send(data.result);
  }
}
