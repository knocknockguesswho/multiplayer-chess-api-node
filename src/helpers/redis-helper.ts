import { client } from 'Config/cache';
import { promisify } from 'util';

const SET_ASYNC = promisify(client.set).bind(client);
const GET_ASYNC = promisify(client.get).bind(client);
const DEL_ASYNC = promisify(client.del).bind(client);

export default class RedisHelper {
  public static async set(key: string, value: string, ex: number = 2) {
    try {
      await SET_ASYNC(key, JSON.stringify(value), 'EX', ex * 60);
      return;
    } catch (err) {
      return err;
    }
  }

  public static async get(key: string) {
    try {
      const data = await GET_ASYNC(key);
      return JSON.parse(data);
    } catch (err) {
      return err;
    }
  }

  public static async del(key: string) {
    try {
      await DEL_ASYNC(key);
      return;
    } catch (err) {
      return err;
    }
  }
}
