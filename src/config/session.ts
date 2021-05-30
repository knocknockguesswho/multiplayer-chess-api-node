import { SessionOptions } from 'express-session';
import { convertMinuteToMS } from 'Helpers/common-helper';
import { generalConfig } from 'Config';
const sessionTimeout: number = convertMinuteToMS(30);
export const sessionOptions: SessionOptions = {
  secret: generalConfig.session.secret,
  name: generalConfig.session.name,
  resave: false,
  cookie: {
    maxAge: sessionTimeout,
    secure: generalConfig.session.secure === 'production',
    sameSite: true,
  },
  rolling: true,
  saveUninitialized: true,
};
