import { Request, Response } from 'express'

import Users from '../../schemas/UserSchema'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await Users.find()
    return res.status(200).json(users)
  }

  public async createUser (req: Request, res: Response): Promise<Response> {
    try {
      const users = await Users.create(req.body)
      return res.status(201).json(users)
    } catch (error) {
      return res.status(201).json(error)
    }
  }
}

export default new UserController()
