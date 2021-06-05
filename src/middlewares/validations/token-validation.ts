import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { config, jwtConfig } from 'Config';
import ResponseHelper from 'Helpers/response-helper';
import { getOriginalToken } from 'Helpers/common-helper';

export default class TokenValidation {
  public static async validate(req: Request, res: Response, next: NextFunction) {
    const responseResult: ResponseHelper = new ResponseHelper();
    try {
      const token = req.headers['authorization'];
      if (!token) throw new Error('Token cannot be empty!');
      jwt.verify(getOriginalToken(token), config.jwt.secret, jwtConfig.options);
      next();
    } catch (err) {
      responseResult.setToFailed({ message: err.message, statusCode: 403 });
      res.status(responseResult.result.statusCode);
      res.send(responseResult.result);
    }
  }
}
