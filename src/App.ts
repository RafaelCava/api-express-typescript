import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerJson from '../swagger/swagger.json'
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
    this.express.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson))
  }

  private database (): void {
    const uri = 'mongodb+srv://dbAdmin:12345@tsnode.fog8d.mongodb.net/tallos_rd?retryWrites=true&w=majority'
    mongoose.connect(uri)
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
