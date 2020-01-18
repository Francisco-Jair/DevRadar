import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.18.5:3333'//ip do expo/porta do node
})

export default api