import { Router } from 'express'
import Login from './controllers/Login/Login'

import UserControllers from './controllers/Usuarios/UsersControllers'

import ProdutosControllers from './controllers/Produtos/ProdutosControllers'
import verifyLogin from './middlewares/verifyLogin'

const routes = Router()

routes.route('/usuarios')
  .post(UserControllers.createUser)

routes.get('/login', Login.index)

routes.use(verifyLogin.index)

routes.route('/usuarios')
  .get(UserControllers.index)
  .put(UserControllers.updatePutUser)
  .delete(UserControllers.deleteUser)

routes.route('/produtos')
  .get(ProdutosControllers.index)
  .post(ProdutosControllers.createProduto)
  .put(ProdutosControllers.updatePutProdutos)
  .delete(ProdutosControllers.deleteProduto)

export default routes
