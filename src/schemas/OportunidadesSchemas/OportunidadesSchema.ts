import { Schema, model, Document } from 'mongoose'

interface OportunidadeInterface extends Document {
  oportunidadeId: string
  vendedorId: string
  vendedorNome: string
  oportunidadeNome: string
}

const OportunidadeSchema = new Schema({
  oportunidadeId: String,
  vendedorId: String,
  vendedorNome: String,
  oportunidadeNome: String
}, {
  timestamps: true
})

export default model<OportunidadeInterface>('Oportunidade', OportunidadeSchema)
