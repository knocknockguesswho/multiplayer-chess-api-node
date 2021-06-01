import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
dotenv.config({ path: '.env' });

moduleAlias.addAliases({
  Config: __dirname + '/config',
  Controllers: __dirname + '/controllers',
  Handlers: __dirname + '/handlers',
  Middlewares: __dirname + '/middlewares',
  Helpers: __dirname + '/helpers',
  Models: __dirname + '/models',
  Routes: __dirname + '/routes',
  Validators: __dirname + '/validators',
});

import express from 'express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import mongoose from 'mongoose';
import redis from 'redis';

import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { config, dbConfig, cacheConfig, sessionConfig } from 'Config';
import { protectedRouter, unprotectedRouter } from 'Routes';
(async () => {
  await mongoose.connect(dbConfig.mongoURI, dbConfig.mongoOptions);
  const redisStore = connectRedis(session);
  const app = express();
  const port = config.general.appPort;

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  app.use(
    session({
      ...sessionConfig.sessionOptions,
      store: new redisStore({ client: cacheConfig.client }),
    }),
  );

  app.use('/api/v1', protectedRouter);
  app.use('/api/v1', unprotectedRouter);
  app.listen(port, () => console.log('app run on port ' + port));
})();
