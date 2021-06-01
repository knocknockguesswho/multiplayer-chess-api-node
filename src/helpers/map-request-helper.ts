import { NextFunction, Request, Response } from 'express';
import { SignupValidation, SigninValidation } from 'Middlewares';

type RequestReturnValue = (req: Request, res: Response, next: NextFunction) => void;
type RequestObject = { [args: string]: RequestReturnValue };
const dummyValidation = (_: Request, __: Response, next: NextFunction): void => next();

export enum REQUESTS {
  SIGNUP = 'signup',
  SIGNIN = 'signin',
  GET_USERS = 'get-users',
  GET_USER_BY_ID = 'get-user-by-id',
  UPDATE_USER_BY_ID = 'update-user-by-id',
  DEACTIVE_USERS = 'deactive-users',
  DEACTIVE_USER_BY_ID = 'deactive-user-by-id',
  ADD_FRIEND = 'add_friend',
}

export const requestObject: RequestObject = {
  [REQUESTS.SIGNUP]: SignupValidation.validate,
  [REQUESTS.SIGNIN]: SigninValidation.validate,
  [REQUESTS.GET_USERS]: dummyValidation,
  [REQUESTS.GET_USER_BY_ID]: dummyValidation,
  [REQUESTS.UPDATE_USER_BY_ID]: dummyValidation,
  [REQUESTS.DEACTIVE_USERS]: dummyValidation,
  [REQUESTS.DEACTIVE_USER_BY_ID]: dummyValidation,
  [REQUESTS.ADD_FRIEND]: dummyValidation,
};
