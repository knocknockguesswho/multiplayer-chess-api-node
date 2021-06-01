import redis, { ClientOpts } from 'redis';
import { generalConfig } from 'Config';
import { Client } from 'connect-redis';

export const redisOption: ClientOpts = {
  port: +generalConfig.redis.port,
  host: generalConfig.redis.host,
  password: generalConfig.redis.password,
  db: 0,
};

export const client: Client = redis.createClient(redisOption) as Client;
