import { FastifyReply, FastifyRequest } from "fastify";
import Token from '../models/token'
import User from '../models/user'

export default class TokenService {
  constructor(){}

  static async getTokenByValue(req: FastifyRequest , res: FastifyReply){}

  static async createToken(req: FastifyRequest , res: FastifyReply){
    const user_id = Number(req.body['user_id']);
    const user = await User.findOne({ 
      where: {
        id: user_id
      }
    }); 

    if(!user){
      return res.status(400).send({
        message: 'User not found!'
      });
    }

    const token = await new Token({ user_id });
    token.generateToken(user);
    await token.save();
    
    return res.status(201).send({ token });
  }
  
}