import redis, { ClientOpts } from 'redis';
import { config } from 'Config';
import { Client } from 'connect-redis';

export const redisOption: ClientOpts = {
  port: +config.redis.port,
  host: config.redis.host,
  password: config.redis.password,
  db: 0,
};

export const client: Client = redis.createClient(redisOption) as Client;
