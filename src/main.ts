import Server from './server'
import { Sequelize } from 'sequelize-typescript'
import { Routes } from './routes'
import { Models } from './models'
import {
  database,
  username,
  password,
  port,
} from './configs/serverConfig';

require('dotenv').config()

const sequelize = new Sequelize({
  database,
  dialect: 'mysql',
  username,
  password,
  storage: ':memory:',
  models: Models
})
console.log(Models, Routes);

const server: Server = new Server();

server.addRoutes(Routes)
server.addModels(sequelize)

server.listen(port);