import socketio from 'socket.io-client'

const socket = socketio('http://192.168.18.5:3333', {
    autoConnect: false
})

function subscribeTonewDevs(subcribeFunction) {
    socket.on('new-Dev', subcribeFunction)
}

function connect(latitude, longitude, techs) {

    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }

    socket.connect()

}

function disconect() {
    if (socket.connected) {
        socket.disconnect()
    }
}

export {
    connect,
    disconect,
    subscribeTonewDevs
}