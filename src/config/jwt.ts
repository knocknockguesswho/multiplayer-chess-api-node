import { SignOptions } from 'jsonwebtoken';
import { config } from 'Config';
export const JWT_SECRET_KEY = config.jwt.secret;
export const jwtOptions: SignOptions = {
  expiresIn: config.jwt.expireIn + 'm',
};
