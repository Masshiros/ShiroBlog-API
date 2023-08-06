import mongoose from "mongoose";
import dbConfig from "../config/db.config.js";
const {
  db: { username, password, name },
} = dbConfig;
const connectionString = `mongodb+srv://${username}:${password}@${name}.oru74wp.mongodb.net/?retryWrites=true&w=majority`;
class Database {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(connectionString);
      console.log("Connect to DB Success");
    } catch (error) {
      console.log("Connect to DB Failed");
    }
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const database = Database.getInstance();
export default database;
