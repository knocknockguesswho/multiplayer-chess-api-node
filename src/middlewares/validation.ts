import { NextFunction, Request, Response } from 'express';
import { protectedRoutes, unprotectedRoutes } from 'Helpers/map-request-helper';
import ObjectIdValidation from './validations/object-id-validation';
import ResponseHelper from 'Helpers/response-helper';

export default class Validation {
  public static run(requestName: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const responseResult: ResponseHelper = new ResponseHelper();
      const isValidObjectId = ObjectIdValidation.validate(req);
      if (isValidObjectId) {
        unprotectedRoutes.hasOwnProperty(requestName) ? unprotectedRoutes[requestName](req, res, next) : protectedRoutes[requestName](req, res, next);
      } else {
        responseResult.setToFailed({ message: 'This request require ObjectId type as a params. Invalid Object id' });
        responseResult.setStatusCode(400);
        res.status(responseResult.result.statusCode);
        res.send(responseResult.result);
      }
    };
  }
}
