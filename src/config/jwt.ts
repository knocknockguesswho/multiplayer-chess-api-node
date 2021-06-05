import { SignOptions } from 'jsonwebtoken';
import { config } from 'Config';
export const options: SignOptions = {
  expiresIn: config.jwt.expiresIn + 's',
};
export const refreshOptions: SignOptions = {
  expiresIn: config.jwt.refreshExpiresIn + 'd',
};
