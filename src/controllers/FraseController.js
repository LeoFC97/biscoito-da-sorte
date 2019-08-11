const Frase = require('../models/Frase') 

module.exports={
    index(require,response){
        Frase.countDocuments().exec(async function (err, count){
            const random = await  Math.floor(Math.random() * count)
            await Frase.findOne().skip(random).exec(
                function (err, result) {
                    return response.json({FraseAleatoria:result})
                })
        })
    },
    async store(require,response){
        const {content, author} = require.body
        const frase = await Frase.create({
            content,
            author
        })
        await console.log(frase)
        return response.json({ok:`frase salva com sucesso com o id:${frase._id}`})
    }
}

