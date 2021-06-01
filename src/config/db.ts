import { ConnectOptions } from 'mongoose';
import { config } from 'Config';

export const mongoURI = `mongodb://${config.mongoDB.username}:${encodeURIComponent(config.mongoDB.password)}@${config.mongoDB.host}:${config.mongoDB.port}/${config.mongoDB.dbName}`;
export const mongoOptions: ConnectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
