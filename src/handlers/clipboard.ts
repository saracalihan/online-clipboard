import { FastifyReply, FastifyRequest } from "fastify";
import Clipboard from '../models/clipboard'
import Token from '../models/token'
import User from '../models/user'

export default class ClipboardService {
  constructor(){}

  static async getClipboardByToken(req: FastifyRequest , res: FastifyReply){
    console.log(req.params['token']);
    
  }

  static async createClipboard(req: FastifyRequest , res: FastifyReply){
    const accessToken = await Token.findOne({
      where: {
        value: req.headers['access-token'].toString()
      }
    })
    
    if(!accessToken){
      return res.status(400).send('Access token not found!')
    }

    const clipboard = new Clipboard();
    clipboard.setContent(req.body['header'],req.body['text'])
    clipboard.generateToken();
    await clipboard.save()

    res.send(clipboard); 
  }
  
}
