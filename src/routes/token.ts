import { RouteOptions } from "fastify";
import Token from "../models/token";
import User from "../models/user";
import { TokenService } from '../handlers'

const getToken: RouteOptions = {
  method: 'GET',
  url: '/tokens/:id',
  handler: async function (req, res) {
    TokenService.getTokenByValue(req, res);
  }
}

const createToken: RouteOptions = {
  method: 'POST',
  url: '/tokens',
  handler: async function (req, res) {
    const user_id = Number(req.body['user_id']);
    const user = await User.findOne({
      where: {
        id: user_id
      }
    });

    if (!user) {
      return res.status(400).send('User not found!');
    }

    const token = await new Token({ user_id });
    token.generateToken(user);
    await token.save();

    return res.send(token);
  }
}

export default [
  getToken,
  createToken
]