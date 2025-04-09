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
      const value = await this.client.get(key); // Async get value
      if (value === null) {  // Explicitly check if value is null
        return null;  // Return null if the key doesn't exist in Redis
      }
      return value;
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
