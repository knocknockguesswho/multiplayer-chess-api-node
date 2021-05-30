import { Request, Response } from 'express';
import { requestObject } from 'Helpers/map-request-helper';
import ObjectIdValidation from './validations/object-id-validation';
import ResponseHelper from 'Helpers/response-helper';

// TODO: mapping all request name
export default class Validation {
  public static run(requestName: string) {
    return (req: Request, res: Response, next: () => Promise<any>) => {
      const responseResult: ResponseHelper = new ResponseHelper();
      const isValidObjectId = ObjectIdValidation.validate(req);
      if (isValidObjectId) {
        requestObject[requestName](req, res, next);
      } else {
        responseResult.setToFailed({ message: 'Invalid Object id' });
        responseResult.setStatusCode(400);
        res.status(responseResult.result.statusCode);
        res.send(responseResult.result);
      }
    };
  }
}
