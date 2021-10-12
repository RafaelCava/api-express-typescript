import { Router } from 'express'
import Login from './controllers/Login/Login'

import UserControllers from './controllers/Usuarios/UsersControllers'

const routes = Router()

routes.route('/usuarios')
  .get(UserControllers.index)
  .post(UserControllers.createUser)

routes.get('login', Login.index)

export default routes
