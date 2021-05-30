import { SignOptions } from 'jsonwebtoken';
import { generalConfig } from 'Config';
export const JWT_SECRET_KEY = generalConfig.jwt.secret;
export const jwtOptions: SignOptions = {
  expiresIn: generalConfig.jwt.expireIn + 'm',
};
