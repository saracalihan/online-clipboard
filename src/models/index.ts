import { Model, Repository } from 'sequelize-typescript'
import Clipboard from './clipboard'
import Token from "./token";
import User from './user'

export const Models: Array<Repository<Model>> = [
  Clipboard,
  User,
  Token
]