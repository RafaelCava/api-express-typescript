import { Router } from 'express'

import UserControllers from './controllers/Usuarios/UsersControllers'

const routes = Router()

routes.route('/usuarios')
  .get(UserControllers.index)
  .post(UserControllers.createUser)

export default routes
