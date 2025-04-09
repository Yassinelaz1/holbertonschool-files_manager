import redisClient from './utils/redis.mjs';
import { strictEqual } from 'assert';
import { createClient } from 'redis';

describe('redisClient test', () => {
    it('get of not existing key', async () => {
      const value = await redisClient.get('myCheckerKey');
      // Check that the value is null when the key does not exist
      strictEqual(value, null);
    });
  });


class RedisClient {
  constructor() {
    this.client = createClient();
    this.isConnected = false;


    this.client.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });


    this.client.on('connect', () => {
      this.isConnected = true;
    });
  }


  isAlive() {
    return this.isConnected;
  }

  async get(key) {
    try {
      const value = await this.client.get(key); // Async get value
      return value === null ? null : value;  // Return null if not found, otherwise return the value
    } catch (err) {
      console.error('Redis GET Error:', err);
      return null;  // Return null if there is an error
    }
  }


  async set(key, value, duration) {
    try {
      await this.client.set(key, value, {
        EX: duration,
      });
    } catch (err) {
      console.error('Redis SET Error:', err);
    }
  }


  async del(key) {
    try {
      await this.client.del(key);
    } catch (err) {
      console.error('Redis DEL Error:', err);
    }
  }
}


const redisClient = new RedisClient();
export default redisClient;
