import { createClient } from 'redis';

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
      const value = await this.client.get(key);
      if (value === null) {
        return null;
      }
      return value;
    } catch (err) {
      console.error('Redis GET Error:', err);
      return null;
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
