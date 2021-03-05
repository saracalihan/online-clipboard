import { RouteOptions } from "fastify";
import User from "../models/user";
import { TokenService, UserService } from '../handlers'

const login: RouteOptions = {
  method: 'POST',
  url: '/login',
  handler: async function (req, res) {
    const email: string = req.body['email'];
    const password: string = req.body['password'];
    const user = await User.findOne({ 
      where: { email }
    });

    if(user && user.checkPassword(password)){
      const token = await user.generateToken()
      return res.send({
        user,
        token
      })
    }
      
    return res.status(400).send('User not found!');
  }
}

const register: RouteOptions = {
  method: 'POST',
  url: '/register',
  handler: async function (req, res){
    const email = req.body['email'];
    const password = req.body['password'];

    let user = await User.findOne({
      where: {
        email
      }
    });

    if(user){
      return res.status(400).send('User already exist!');
    }

    user = new User({ email });
    await user.setPassword(password);
    await user.save();
    return res.send({user: user});
  }
}

export default [
  login,
  register
]