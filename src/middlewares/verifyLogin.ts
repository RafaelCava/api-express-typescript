import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import secureToken from '../controllers/Login/secureToken'

class VerifyLogin {
  public async index (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(403).json({ message: 'Falta o token' })
    }
    const bearer = authorization.split(' ')
    const [, token] = bearer
    try {
      const user = jwt.verify(token, secureToken)
      if (!user) {
        return res.status(403).json({ message: 'Token inválido' })
      }
      req.user = user
    } catch (error) {
      return res.status(400).json({ error })
    }
    next()
  }
}

export default new VerifyLogin()
