import { createClient } from 'redis';

class RedisClient {
  constructor() {
    this.client = createClient(); // Creates the client instance
    this.isConnected = false;

    // Error handling
    this.client.on('error', (err) => {
      console.error('Redis Client Error:', err);
    });

    // Check connection
    this.client.on('connect', () => {
      this.isConnected = true;
    });

    // Connect to Redis (for redis@4.x)
    this.client.connect();
  }

  // Check if Redis connection is alive
  isAlive() {
    return this.isConnected;
  }

  // Get a value from Redis by key
  async get(key) {
    try {
      return await this.client.get(key);  // Async get value
    } catch (err) {
      console.error('Redis GET Error:', err);
      return null;
    }
  }

  // Set a value in Redis with expiry
  async set(key, value, duration) {
    try {
      await this.client.set(key, value, {
        EX: duration,  // Expiration time in seconds
      });
    } catch (err) {
      console.error('Redis SET Error:', err);
    }
  }

  // Delete a key from Redis
  async del(key) {
    try {
      await this.client.del(key);
    } catch (err) {
      console.error('Redis DEL Error:', err);
    }
  }
}

// Export an instance of RedisClient as the default export
const redisClient = new RedisClient();
export default redisClient;
