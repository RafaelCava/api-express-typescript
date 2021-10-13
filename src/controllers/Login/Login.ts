import { Request, Response } from 'express'
import User from '../../schemas/UserSchemas/UserSchema'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import secureToken from './secureToken'
class Login {
  public async index (req: Request, res: Response): Promise<Response> {
    const { email, password: senhaBody } = req.body
    try {
      const users = await User.find({ email })

      const user = users[0]

      const { password } = user

      const result = await bcrypt.compare(senhaBody, password)

      if (!result) {
        return res.status(400).json({ message: 'usuário ou senha inválidos' })
      }

      const token = jwt.sign({
        id: user._id,
        nome: user.firstName,
        email: user.email
      }, secureToken, {
        expiresIn: '8h'
      })

      return res.status(200).json({ token })
    } catch (error) {
      switch (error) {
        case {}:
          return res.status(400).json(error)
          break
        default:
          return res.status(400).json(error)
          break
      }
    }
  }
}

export default new Login()
