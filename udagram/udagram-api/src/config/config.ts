import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "020508m.m",
  database: "database-1",
  port: 5432,
  host: "database-1.ctwv75pzrl9w.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: "eu-east-1",
  aws_profile: "default",
  aws_media_bucket: "bucket321321",
  url: "http://udagram-api2-dev222.us-east-1.elasticbeanstalk.com",
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
