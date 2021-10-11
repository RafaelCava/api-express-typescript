import { Request, Response } from 'express'

import Users from '../../schemas/UserSchema'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = Users.find()
    console.log(users)
    return res.status(200).json(users)
  }

  public async teste (req: Request, res: Response): Promise<Response> {
    return res.status(200).json('funciona')
  }
}

export default new UserController()
