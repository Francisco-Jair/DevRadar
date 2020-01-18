const Dev = require('../models/Devs')
const parseString = require('../utils/parserStringasArray')


module.exports = {
    async index(requisicao, resposta) {

        const {latitude, longitude, techs} = requisicao.query
        
        const tecArray = parseString(techs)
        //Buscar todos os devs num raio de 10 km
        //filtrar por tecnologia
       
        const devs = await Dev.find({
            techs: {
                $in: tecArray,
            },
            location : {
                $near : {
                    $geometry: {
                        type:'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 1000,
                }
            }
        })

        return resposta.json({ devs})
    }
}