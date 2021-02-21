import Server from './server'
import { Sequelize } from 'sequelize-typescript'
import { Routes, Models } from './modules'
import User from './modules/user/model' 
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
  //models: [User] //[__dirname + '/models'] // or [User, Order],
})

sequelize.addModels(Models)


// modules/index.ts modelleri ve routerları klasör isimlerine göre otomatik olarak alacak ve buradaki models ile addRouter içine ekleyecek kod yazılmalı 

const server: Server = new Server();

server.addRouter(Routes)

server.listen(port);