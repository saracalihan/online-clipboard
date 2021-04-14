import { FastifyReply, FastifyRequest } from "fastify";
import Clipboard from '../models/clipboard'
import Token from '../models/token'
import User from '../models/user'

export default class ClipboardService {
  constructor(){}

  static async getClipboardByToken(req: FastifyRequest , res: FastifyReply){
    const accessToken = req.headers['access-token'] || null;
    const token_value = req.params['token'];
    
    const clipboard = await Clipboard.findOne({
      where: {
        token_value
      }
    })

    if(!clipboard)
      return res.status(400).send({
        message: 'Clipboard not found!'
      })
    
    if(!clipboard.is_shared){
      const token = await Token.findOne({
        where: {
          value:  accessToken
        }
      });
      
      if(!token)
      return res.status(400).send({
        message: 'Clipboard not found or you don\'t have permission!'
      })
    }
    
    res.status(200).send({ clipboard });
  }

  static async createClipboard(req: FastifyRequest , res: FastifyReply){
    const accessToken = await Token.findOne({
      where: {
        value: req.headers['access-token'].toString()
      }
    })
    
    if(!accessToken){
      return res.status(400).send({
        message: 'Access token not found!'
      })
    }

    const clipboard = new Clipboard();
    clipboard.user_id = accessToken.user_id;       
    clipboard.setContent(req.body['header'],req.body['text'])
    clipboard.generateToken();
    await clipboard.save();

    res.status(201).send({ clipboard }); 
  }
  
}
