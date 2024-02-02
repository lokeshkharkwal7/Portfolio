// racism 

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Portfolio') 
const contactSchema = mongoose.Schema({
    "name" : String ,
    "email": String ,
    "phone": Number ,
    "message": String ,
    "type" : String ,
})

module.exports = mongoose.model('Contacted',contactSchema) 
