const axios = require('axios')
const Dev = require('../models/Devs')
const parseString = require('../utils/parserStringasArray')

/*
o COntroller tem no maximo 5 funções

index, show, store, update, destroy
*/ 

module.exports = {

    async index(requisicao, resposta)
    {
        const devs = await Dev.find();

        return resposta.json(devs)
    },


    async store(requisicao, resposta) {
        //Quando acesso alguma rota estou fazendo uma requisição para o servidor
        //Devolve uma resposta
        const { github_username, techs, latitude, longitude } = requisicao.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const ApiResposta = await axios.get(`https://api.github.com/users/${github_username}`)

            //desestruturado para pegar só o que deseja
            let { name = login, avatar_url, bio } = ApiResposta.data

            // console.log(name, avatar_url, bio, github_username)

            const techsArrays = parseString(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            //Propriedade e valor são o mesmo nome
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArrays,
                location
            })
        }

        return resposta.json(dev)

    },

    async update()
    {
        //Atualizar uma unica pessoa
    },

    async destroy()
    {
        //Excluir alguem do banco de dados
    },
}