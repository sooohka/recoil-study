import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.port,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  databasePort:process.env.database_port
};

export default config;
