import { RouteOptions } from "fastify";
import { ClipboardService } from '../handlers'

const getToken: RouteOptions = {
  method: 'GET',
  url: '/clipboards/:token',
  handler: async function (req, res) {
    ClipboardService.getClipboardByToken(req, res);
  }
}

const createToken: RouteOptions = {
  method: 'POST',
  url: '/clipboards',
  handler: async function (req, res) {  
    ClipboardService.createClipboard(req, res);
  }
}

export default [
  getToken,
  createToken
]