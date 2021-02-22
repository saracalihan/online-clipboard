import { Model, Repository } from 'sequelize-typescript'
import Token from "../models/token";
import User from '../models/user'

export const Models: Array<Repository<Model>> = [
  User,
  Token
]