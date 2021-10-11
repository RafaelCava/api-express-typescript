import { Router } from 'express'

import UserControllers from './controllers/Usuarios/UsersControllers'

const routes = Router()

routes.get('/', UserControllers.index)
routes.route('/usuarios')
  .get(UserControllers.teste)

export default routes
