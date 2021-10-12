import { Request, Response } from 'express'
import User from '../../schemas/UserSchema'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import secureToken from './secureToken'
class Login {
  public async index (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    try {
      const user = await User.find({ email })
      const result = bcrypt.compare(password, user.password)
      if (!result) {
        return res.status(400).json({ message: 'usuário ou senha inválidos' })
      }
      const token = jwt.sign({
        id: user.id,
        nome: user.firstName,
        email: user.email
      }, secureToken)
      return res.status(200).json({ token })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new Login()
