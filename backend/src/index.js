//www.google.com/Rotas

const express = require('express') //Micro Fremework
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes.js')//Importado as rotas do arquivi rotas criado localmnete
const http = require('http')
const { setupWebSocket } = require('./webSocket')

const app = express() //Cria a aplicação
const server = http.Server(app)

setupWebSocket(server)


mongoose.connect('mongodb+srv://jair:root@cluster0-8fdmb.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())//Tem que vir antes das rotas
app.use(routes)

server.listen(3333) //Coloca a porta onde vou acessar a app
