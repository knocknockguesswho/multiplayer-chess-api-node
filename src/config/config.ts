export const config = {
  general: {
    appPort: process.env.APP_PORT,
    bcryptSaltRounds: +process.env.BCRYPT_SALT_ROUNDS,
  },
  mongoDB: {
    protocol: process.env.DB_PROTOCOL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME,
  },
  redis: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  },
  session: {
    secret: process.env.SESSION_SECRET,
    secure: process.env.NODE_ENV,
    name: process.env.SESSION_NAME,
  },
  jwt: {
    secret: process.env.SESSION_SECRET,
    expireIn: process.env.TOKEN_TIMEOUT,
  },
};
