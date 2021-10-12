import { Request, Response } from 'express'

import Users from '../../schemas/UserSchemas/UserSchema'

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

import secureToken from '../Login/secureToken'
class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(403).json({ message: 'Falta o token' })
    }
    const bearer = authorization.split(' ')
    const [, token] = bearer
    try {
      const userToken = jwt.verify(token, secureToken)

      const { id } = userToken

      const users = await Users.find({ _id: id })

      const { _doc: user } = users[0]

      const { password, ...userSemSenha } = user

      return res.status(200).json(userSemSenha)
    } catch (error) {
      return res.status(400).json(error)
    }
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
