const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes=require('./routes')

const server =express()

mongoose.connect('mongodb+srv://leo:leo@cluster0-vprre.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
server.use(cors())
server.use(express.json())
server.use(routes)
server.listen(3330)