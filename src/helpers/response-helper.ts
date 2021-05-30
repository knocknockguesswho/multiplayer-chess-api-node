import { Document } from 'mongoose';

export type ResponseData = Document<Array<{ [args: string]: string }>> | { [args: string]: string };

interface IFailedParam {
  message?: string;
  statusCode?: number;
}

interface IResult {
  success?: boolean;
  message: string;
  data?: ResponseData;
  statusCode?: number;
}

export default class ResponseHelper {
  public result: IResult;

  public constructor(result: IResult = { success: true, message: 'Success', data: undefined, statusCode: 200 }) {
    this.result = result;
  }
  public setData(data: ResponseData) {
    this.result.data = data || {};
  }
  public setMessage(message: string) {
    this.result.message = message || '';
  }
  public setStatusCode(statusCode: number) {
    this.result.statusCode = statusCode || null;
  }
  public setToFailed(param: IFailedParam) {
    this.result.success = false;
    this.result.message = param.message;
    this.result.data = {};
    this.result.statusCode = param.statusCode || 500;
  }
}
