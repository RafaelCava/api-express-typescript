import { Router } from 'express'
import Login from './controllers/Login/Login'

import UserControllers from './controllers/Usuarios/UsersControllers'

import ProdutosControllers from './controllers/Produtos/Produtos'

const routes = Router()

routes.route('/usuarios')
  .get(UserControllers.index)
  .post(UserControllers.createUser)

routes.get('/login', Login.index)

routes.route('/produtos')
  .get(ProdutosControllers.index)
  .post()

export default routes
