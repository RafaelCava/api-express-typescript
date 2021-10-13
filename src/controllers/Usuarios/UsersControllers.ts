import { Request, Response } from 'express'

import Users from '../../schemas/UserSchemas/UserSchema'

import Produtos from '../../schemas/ProdutosSchemas/ProdutosSchema'

import bcrypt from 'bcrypt'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user
      const users = await Users.find({ _id: id })

      const listaProdutos = await Produtos.find({ idCliente: id })
      const { _doc: user } = users[0]

      const { password, ...userSemSenha } = user

      userSemSenha.produtos = listaProdutos

      return res.status(200).json(userSemSenha)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async createUser (req: Request, res: Response): Promise<Response> {
    const { email, firstName, lastName, password } = req.body
    if (!email) {
      return res.status(400).json({ message: 'Falta o campo email' })
    }
    if (!firstName) {
      return res.status(400).json({ message: 'Falta o campo firstName' })
    }
    if (!lastName) {
      return res.status(400).json({ message: 'Falta o campo lastName' })
    }
    if (!password) {
      return res.status(400).json({ message: 'Falta o campo password' })
    }
    try {
      const hash = await bcrypt.hash(password, 10)
      req.body.password = hash
      await Users.create(req.body)
      return res.status(201).json({ message: 'usuário cadastrado com sucesso' })
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    const { email, firstName, lastName, password } = req.body
    const { id } = req.user
    if (!email) {
      return res.status(400).json({ message: 'Falta o campo email' })
    }
    if (!firstName) {
      return res.status(400).json({ message: 'Falta o campo firstName' })
    }
    if (!lastName) {
      return res.status(400).json({ message: 'Falta o campo lastName' })
    }
    if (!password) {
      return res.status(400).json({ message: 'Falta o campo password' })
    }
    try {
      const hash = await bcrypt.hash(password, 10)
      req.body.password = hash
      await Users.updateOne({ _id: id }, { $set: { email, firstName, lastName, password } })
      return res.status(400).json({ message: 'Atualização de usuário concluida' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export default new UserController()
