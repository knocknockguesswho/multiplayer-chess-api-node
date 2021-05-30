import ResponseHelper from 'Helpers/response-helper';
import { isValidObjectId } from 'mongoose';
import { Request, Response } from 'express';

// DISINI KIRIM NEXT ATAU ERROR.
export default class ObjectIdValidation {
  public static validate(req: Request) {
    if (req.params.hasOwnProperty('id')) {
      if (!isValidObjectId(req.params.id)) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
}
