import { Request, Response } from 'express'
import OportunidadesSchemas from '../../schemas/OportunidadesSchemas/OportunidadesSchema'

class OportunidadeController {
  public async listarOportunidades (req: Request, res: Response): Promise<Response> {
    const oportunidades = await OportunidadesSchemas.find()
    return res.status(200).json(oportunidades)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    if (!req.body.oportunidadeId) {
      return res.status(400).json({ error: { message: 'falta o id da Oportunidade!' } })
    }
    if (!req.body.vendedorId) {
      return res.status(400).json({ error: { message: 'falta o id do vendedor!' } })
    }
    try {
      const data = await OportunidadesSchemas.create(req.body)
      const response = await data.save()
      return res.status(201).json(response)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

export default new OportunidadeController()
