import { Request, Response } from 'express'

import Users from '../../schemas/UserSchema'

import bcrypt from 'bcrypt'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await Users.find()
    users.map(user => {
      user.password = null
    })
    return res.status(200).json(users)
  }

  public async createUser (req: Request, res: Response): Promise<Response> {
    try {
      const hash = await bcrypt.hash(req.body.password, 10)
      req.body.password = hash
      const users = await Users.create(req.body)
      const { password, ...user } = users._doc
      return res.status(201).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new UserController()
