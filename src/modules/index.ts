// tüm modüllerin routerlarının ve modellerinin toplanacağı ve main.ts'e gönderileceği yer
//Doğrudan klasör isimlerine göre nesene üretilecek.

import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { Model, Repository } from 'sequelize-typescript'
import UserRoutes from '../modules/user/router'
import User from './user/model'


export const Routes: Array<RouteOptions> = [
  {
    method: 'GET',
    url: '/health-check',
    handler: function (res: FastifyRequest , req: FastifyReply): void {
      req.send('OK');
    }
  },
  ...UserRoutes
]



export const Models: Array<Repository<Model>> = [
  User
]