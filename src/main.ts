import { Sequelize } from 'sequelize-typescript'

import Server from './server'
import { Routes } from './routes'
import { Models } from './models'
import {
  database,
  username,
  password,
  port,
} from '../config/db-config';

require('dotenv').config()

const sequelize = new Sequelize({
  database,
  dialect: 'mysql',
  username,
  password,
  storage: ':memory:',
  models: Models
})

const routes = Routes.map(r => {
  let method = '';

  switch (r.method){
    case 'GET':
      method = `${r.method}`.bgGreen;
      break;
    case 'POST':
      method = `${r.method}`.bgBlue;
      break;
    case 'PUT':
      method = `${r.method}`.bgYellow;
      break;
    case 'DELETE':
      method = `${r.method}`.bgRed;
      break;
  }
  return `\t${r.url}`.green + ' ' + method
}).toString().split(',').join('\n');

console.log('Models:\n\t', Models,'\nRoutes:\n',routes);

const server: Server = new Server();

server.addRoutes(Routes)
server.addModels(sequelize)

server.listen(port);