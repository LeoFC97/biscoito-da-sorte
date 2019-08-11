const express = require('express')

const FraseController = require('./controllers/FraseController')
const baseUrl = 'http://localhost:3333'

const routes = express.Router()
 
routes.get('/frase',FraseController.index)
routes.post('/frase',FraseController.store)



module.exports =routes
