// server/db/index.js
import { Sequelize } from 'sequelize';
import type { Dialect } from 'sequelize';
import dotenv from 'dotenv';
import pg from "pg";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    host: (process.env.DATABASE_HOST || 'localhost'),
    port: (process.env.DATABASE_PORT || 5432) as number,
    dialect: (process.env.DATABASE_DRIVER || 'postgres') as Dialect,
    dialectModule: pg,
    logging: false,
    minifyAliases: true
  }
);


export default sequelize