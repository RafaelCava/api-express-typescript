import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import secureToken from '../Login/secureToken'
import ProdutosSchema from '../../schemas/ProdutosSchemas/ProdutosSchema'
class ProdutosControllers {
  public async index (req: Request, res: Response): Promise<Response> {
    const authorization = req.headers.authorization
    if (!authorization) {
      return res.status(403).json({ message: 'Falta o token' })
    }
    const bearer = authorization.split(' ')
    const [, token] = bearer
    try {
      const user = jwt.verify(token, secureToken)
      const produtos = await ProdutosSchema.find({ idCliente: user.id })
      return res.status(200).json(produtos)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async createProduto (req: Request, res: Response): Promise<Response> {
    try {
      const user = jwt.verify(token, secureToken)
      const { id: idCliente } = user
      if (!nome) {
        return res.status(400).json({ message: 'Falta o campo nome' })
      }
      if (!idCliente) {
        return res.status(403).json({ message: 'Falta o campo de id do cliente' })
      }
      if (!quantidade) {
        return res.status(400).json({ message: 'Falta o campo de quantidade' })
      }
      if (!preco) {
        return res.status(400).json({ message: 'Falta o campo de preço' })
      }
      if (!descricao) {
        return res.status(400).json({ message: 'Falta o campo de descricao' })
      }
      req.body.idCliente = idCliente
      await ProdutosSchema.create(req.body)
      return res.status(201).json({ message: 'Produto cadastrado com sucesso' })
    } catch (error) {
      return res.status(400).json(error)
    }
  }
}

export default new ProdutosControllers()
