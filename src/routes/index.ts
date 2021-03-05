import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import AuthenticationRoutes from './authentication'
import ClipboardRoutes from './clipboard'
import TokenRoutes from './token'
import UserRoutes from './user'

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
  ...AuthenticationRoutes,
  ...ClipboardRoutes
]