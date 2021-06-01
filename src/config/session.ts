import { SessionOptions } from 'express-session';
import { convertMinuteToMS } from 'Helpers/common-helper';
import { config } from 'Config';
const sessionTimeout: number = convertMinuteToMS(30);
export const sessionOptions: SessionOptions = {
  secret: config.session.secret,
  name: config.session.name,
  resave: false,
  cookie: {
    maxAge: sessionTimeout,
    secure: config.session.secure === 'production',
    sameSite: true,
  },
  rolling: true,
  saveUninitialized: true,
};
