import { Request, Response } from 'express';
import { requestObject } from 'Helpers/map-request-helper';

// TODO: mapping all request name
export default class Validation {
  public static run(requestName: string) {
    return async (req: Request, res: Response, next: () => Promise<any>) => {
      await requestObject[requestName](req, res, next);
    };
  }
}
