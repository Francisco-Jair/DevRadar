const { Router } = require('express')//Qunado eu quero importa somente algumas coisas usa -se chave e o nome
const DevController = require('./controllers/DevsController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos De Paramentros
/**
    1 - Query Params: Usado mais no GET -> ficam visiveis no enderenço
    pode ser acessado por requisicao.query -> usado para filtros, paginação, ordenação....
    
    2 - Route Params: PUT, DELETE -> requesicao.params (indetificar um recurso na alteração ou remoção)
   
    3 - Body: POST, PUT ->  requisicao.body(usado para criação ou alteração de um registro)
 **/

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)//Uma rota (onde não estou colocando nada para ir para a raiz)
routes.get('/search', SearchController.index)

module.exports = routes;