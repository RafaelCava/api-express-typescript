import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    const uri = 'mongodb+srv://dbAdmin:12345@tsnode.fog8d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    mongoose.connect(uri)
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
