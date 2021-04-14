import { FastifyReply, FastifyRequest } from "fastify";
import User from '../models/user'

export default class UserService{
  
  constructor(){}
  
  static async getUserById(req: FastifyRequest , res: FastifyReply): Promise<void>{
    const id = req.params['id'];
    const user = await User.findOne({ 
      where: {
        id
      }
    })

    if(!user){
      return res.status(400).send({
        error: 'User not found!'
      })
    }
    console.log(user.tokens);
    
    return res.status(200).send({ user });
  }
  
  static async createUser(req: FastifyRequest , res: FastifyReply) {
    const email = req.body['email'];
    const password = req.body['password'];

    let user = await User.findOne({ 
      where: {
        email
      }
    }); 

    if(user){
      return res.status(400).send({
        message: 'User already exist!'
      });
    }

    user = new User({ email });
    await user.setPassword(password);
    await user.save();
    return res.status(201).send({user: user});
  }
}