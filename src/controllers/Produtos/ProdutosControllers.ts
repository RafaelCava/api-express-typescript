import { Request, Response } from 'express'
import ProdutosSchema from '../../schemas/ProdutosSchemas/ProdutosSchema'
class ProdutosControllers {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user
      const produtos = await ProdutosSchema.find({ idCliente: id })
      return res.status(200).json(produtos)
    } catch (error) {
      return res.status(400).json(error)
    }
  }

  public async createProduto (req: Request, res: Response): Promise<Response> {
    const { nome, quantidade, preco, descricao } = req.body
    try {
      const { id: idCliente } = req.user
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

  public async updatePutProdutos (req: Request, res: Response): Promise<Response> {
    let { email, firstName, lastName, password } = req.body
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
      password = hash
      await Users.updateOne({ _id: id }, { $set: { email, firstName, lastName, password } })
      return res.status(201).json({ message: 'Atualização de usuário concluida' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }

  public async deleteProduto (req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    const { id: idUser } = req.user
    try {
      await ProdutosSchema.deleteOne({ _id: id, idCliente: idUser })
      return res.status(200).json({ message: 'Usuário deletado com sucesso!!' })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

export default new ProdutosControllers()
