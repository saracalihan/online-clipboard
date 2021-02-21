require('dotenv').config()

export const database =  process.env.DATABASE;
export const username =  process.env.DATABASE_USERNAME;
export const password =  process.env.DATABASE_PASSWORD;
export const port = Number(process.env.APP_PORT);