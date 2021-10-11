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
      await Users.create(req.body)
      return res.status(201).json({ message: 'usuário cadastrado com sucesso' })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new UserController()
