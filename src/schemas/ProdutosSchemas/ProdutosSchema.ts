import { Schema, model, Document } from 'mongoose'

interface ProdutosInterface extends Document {
  nome?: string,
  quantidade?: number,
  preco?: number,
  descricao?: string
}

const ProdutoSchema = new Schema({
  nome: String,
  quantidade: Number,
  preco: Number,
  descricao: String
}, {
  timestamps: true
})

export default model<ProdutosInterface>('Produtos', ProdutoSchema)
