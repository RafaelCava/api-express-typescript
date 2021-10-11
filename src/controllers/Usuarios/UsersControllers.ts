import { Request, Response } from 'express'

import Users from '../../schemas/UserSchema'

import bcrypt from 'bcrypt'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await Users.find()
    return res.status(200).json(users)
  }

  public async createUser (req: Request, res: Response): Promise<Response> {
    try {
      const { password, ...user } = req.body
      const hash = bcrypt.hash(password, 10)
      user.password = hash
      const users = await Users.create(user)
      return res.status(201).json(users)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new UserController()
