import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import UserRoutes from './user'
import TokenRoutes from './token'
import Authentication from './authentication'

export const Routes: Array<RouteOptions> = [
  {
    method: 'GET',
    url: '/health-check',
    handler: function (res: FastifyRequest , req: FastifyReply): void {
      req.send('OK');
    }
  },
  ...UserRoutes,
  ...TokenRoutes,
  ...Authentication
]