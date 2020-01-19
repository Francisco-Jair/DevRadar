const socketio = require('socket.io')
const parseStringArray = require('./utils/parserStringasArray')
const calculatios = require('./utils/calcDistancia')
//Se der erro é aqui

let io
const connections = []

exports.setupWebSocket = (server) => {
    io = socketio(server)

    io.on('connection', socket => {

        const { latitude, longitude, techs } = socket.handshake.query

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringArray(techs)
        })
    })
}

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return calculatios(coordinates, connection.coordinates) < 10
            && connections.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.filter(connection => {
        io.to(connection.id.emit(message, data))
    })
}