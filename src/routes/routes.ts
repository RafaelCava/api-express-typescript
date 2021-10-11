import express from 'express'

const routes = express()

routes.route('/usuarios')
  .post((req, res) => {
    res.status(200).json('funfou post')
  })
  .get((req, res) => {
    res.status(200).json('funfou get')
  })

export default routes
