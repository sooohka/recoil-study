import { createPool } from "mysql2/promise";
import config from "../config";

const pool = createPool({
  port: Number(config.databasePort),
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

export default pool;
