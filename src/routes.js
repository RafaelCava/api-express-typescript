import { Router } from 'express'

import UserControllers from './controllers/Usuarios/UsersControllers'

const routes = Router()

routes.get('/usuarios', UserControllers.index)
routes.post('/usuarios', UserControllers.createUser)

export default routes
