import { MongoClient } from 'mongodb';

const host =  process.env.DB_HOST || 'localhost';
const port = process.env.DB_HOST || 27017;
const DB_DATABASE =  process.env.DB_HOST || 'files_manager';
const uri = `mongodb://${host}:${port}`;

class DBClient{
    constructor() {
        MongoClient.connect(url, (err, client) => {
            if (!err) {
              this.db = client.db(database);
            } else {
              this.db = false;
            }
          });
        }
    isAlive() {
        return !!this.db;
      }
    
      async nbUsers() {
        try {
          return await this.db.collection('users').countDocuments();
        } catch (err) {
          console.error('Error getting number of users:', err);
          return 0;
        }
      }
    
      async nbFiles() {
        try {
          return await this.db.collection('files').countDocuments();
        } catch (err) {
          console.error('Error getting number of files:', err);
          return 0;
        }
      }
    
}
const dbClient = new DBClient();
export default dbClient;