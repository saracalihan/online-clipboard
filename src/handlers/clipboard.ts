import { FastifyReply, FastifyRequest } from "fastify";
import Clipboard from '../models/clipboard'
import Token from '../models/token'
import User from '../models/user'

export default class ClipboardService {
  constructor(){}

  static async getClipboardByToken(req: FastifyRequest , res: FastifyReply){
    const accessToken = req.headers['access-token'];
    const token_value = req.params['token'];
    
    const token = await Token.findOne({
      where: {
        value:  accessToken 
      }
    });
    
    if(!token)
      return res.status(400).send('token not found');
    
    const clipboard = await Clipboard.findOne({
      where: {
        user_id: token.user_id,
        token_value
      }
    })
   
    if(!clipboard)
      return res.status(400).send('Clipboard not found')
    
    res.send(clipboard);
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
    clipboard.user_id = accessToken.user_id;       
    clipboard.setContent(req.body['header'],req.body['text'])
    clipboard.generateToken();
    await clipboard.save();

    res.send(clipboard); 
  }
  
}
