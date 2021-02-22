import { RouteOptions } from "fastify";
import { TokenService } from '../services'

const getToken: RouteOptions = {
  method: 'GET',
  url: '/tokens/:id',
  handler: function (req, res) {
    TokenService.getTokenByValue(req, res);
  }
}

const createToken: RouteOptions = {
  method: 'POST',
  url: '/tokens',
  handler: function (req, res) {
    TokenService.createToken(req, res);
  }
}

export default [
  getToken,
  createToken
]