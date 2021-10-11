import { Request, Response } from 'express'

import Users from '../../schemas/Users'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = Users.find()
    return res.status(200).json(users)
  }
}

export default new UserController()
