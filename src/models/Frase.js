const {Schema,model} = require('mongoose')

const FraseSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    likes:{
        type:String,
        default:"0",
        require:true
    },
    dislikes:{
        type:String,
        default:"0",
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{
    timestamps:true,
})
module.exports = model('Frase',FraseSchema)