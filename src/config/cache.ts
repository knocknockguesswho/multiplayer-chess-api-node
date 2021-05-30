import { RedisOptions } from 'ioredis';
import { generalConfig } from 'Config';
export const redisOptions: RedisOptions = {
  port: +generalConfig.redis.port,
  host: generalConfig.redis.host,
  password: generalConfig.redis.password,
};
