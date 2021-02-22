import { RouteOptions } from "fastify";
import UserService from '../services/user'

const getUser: RouteOptions = {
  method: 'GET',
  url: '/users/:id',
  handler: async function (req, res) {
    UserService.getUserById(req, res);
  }
}

const createUser: RouteOptions = {
  method: 'POST',
  url: '/users',
  handler: async function (req, res) {
    UserService.createUser(req, res);
  }
}

export default [
  getUser,
  createUser
]