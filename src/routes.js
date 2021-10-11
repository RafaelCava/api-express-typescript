import { Router } from 'express'

import UserControllers from './controllers/Usuarios/UsersControllers'

const routes = Router()

routes.route('usuarios')
  .get(UserControllers.index)

export default routes