import { ConnectOptions } from 'mongoose';
import { generalConfig } from 'Config';

export const mongoURI = `mongodb://${generalConfig.mongoDB.username}:${encodeURIComponent(generalConfig.mongoDB.password)}@${generalConfig.mongoDB.host}:${generalConfig.mongoDB.port}/${generalConfig.mongoDB.dbName}`;
export const mongoOptions: ConnectOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
