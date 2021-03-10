import fastify, { FastifyInstance, RouteOptions } from 'fastify'
import { Models } from './models'
import 'colors';

export default class Server {
  public app: FastifyInstance;

  constructor() {
    this.app = fastify()
  }

  listen(port: number, callback?: Function): void {
    this.app.listen(port, (err, address): void => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening on ${address}`.green);

      if (callback) {
        callback();
      }
    })

    process.on('unhandledRejection', (err) => {
      console.error(err);
      process.exit();
    });
  }

  addRoutes(routers: Array<RouteOptions>){
    routers.forEach((r) => {
      this.app.route(r)
    })
  }

  addModels(sequelize){
    sequelize.addModels(Models)
  }
}
