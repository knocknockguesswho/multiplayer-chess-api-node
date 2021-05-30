import { Request, Response } from 'express';
import { SignupValidation, SigninValidation } from 'Middlewares';

type RequestReturnValue = (req: Request, res: Response, next: () => Promise<any>) => Promise<any>;
type RequestObject = { [args: string]: RequestReturnValue };
const dummyValidation = (req: Request, res: Response, next: () => Promise<any>) => next();

export enum REQUESTS {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
  GET_USERS = 'get-users',
  GET_USER_BY_ID = 'get-user-by-id',
  UPDATE_USER_BY_ID = 'update-user-by-id',
  DEACTIVE_USERS = 'deactive-users',
  DEACTIVE_USER_BY_ID = 'deactive-user-by-id',
}

export const requestObject: RequestObject = {
  [REQUESTS.SIGNUP]: SignupValidation.validate,
  [REQUESTS.SIGNIN]: SigninValidation.validate,
  [REQUESTS.GET_USERS]: dummyValidation,
  [REQUESTS.GET_USER_BY_ID]: dummyValidation,
  [REQUESTS.UPDATE_USER_BY_ID]: dummyValidation,
  [REQUESTS.DEACTIVE_USERS]: dummyValidation,
  [REQUESTS.DEACTIVE_USER_BY_ID]: dummyValidation,
};
