import { config } from "dotenv";
config();
const dev = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
  db: {
    username: process.env.DEV_DB_USERNAME || "nguahoang2003",
    password: process.env.DEV_DB_PASSWORD,
    name: process.env.DEV_DB_NAME || "shiroblog",
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT,
  },
  db: {
    username: process.env.PRO_DB_USERNAME || "nguahoang2003",
    password: process.env.PRO_DB_PASSWORD,
    name: process.env.PRO_DB_NAME || "shiroblog",
  },
};

const configDB = { dev, pro };
const env = process.env.NODE_ENV || "dev";
console.log(configDB[env], env);
const dbConfig = configDB[env];
export default dbConfig;
