const Frase = require('../models/Frase') 


module.exports={
    index(require,response){
        console.log('entrou no index')

        return response.json(require.body)
    },
    async store(require,response){
        await console.log('entrou no store')
        console.log(require.body)
        awa
        return response.json(require.body)

    }
    
}

