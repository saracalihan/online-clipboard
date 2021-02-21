import { FastifyReply, FastifyRequest } from "fastify";
import User from './model'

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
      return res.status(400).send({error: 'User not found!'})
    }

    return res.send(user);
  }
  
  static async createUser(req: FastifyRequest , res: FastifyReply) {
    const email = req.body['email'];
    let user = await User.findOne({ 
      where: {
        email
      }
    }); 

    if(user){
      return res.status(400).send('User already exist!');
    }

    user = new User({ email });
    await user.save();
    return res.send({user: user});
  }
}