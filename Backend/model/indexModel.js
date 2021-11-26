const mongoose = require("mongoose")
const { Schema } = mongoose
const IndexSchema = new Schema({
    name: String
})

const IndexModel = mongoose.model("indexs", IndexSchema)

module.exports =  IndexModel

//Esto es un esquema generico "index" luego remplazar por el resto de las rutas que voy a usar
