import { Schema, model, Document } from 'mongoose'

interface OportunidadeInterface extends Document {
  oportunidadeId: string
  vendedorId: string
}

const OportunidadeSchema = new Schema({
  oportunidadeId: String,
  vendedorId: String
}, {
  timestamps: true
})

export default model<OportunidadeInterface>('Oportunidade', OportunidadeSchema)
