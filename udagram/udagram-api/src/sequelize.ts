import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(
  "postgres://postgres:020508m.m@database-1.ctwv75pzrl9w.us-east-1.rds.amazonaws.com:5432/postgres"
);
