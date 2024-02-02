// racism 

const mongoose = require('mongoose')
const uri ="mongodb+srv://lokesh:lokesh@portfolio.ulzavtb.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri) 
const contactSchema = new mongoose.Schema({
    "name" : String ,
    "email": String ,
    "phone": Number ,
    "message": String ,
    "type" : String ,
})

module.exports = mongoose.model('Contacted',contactSchema) 



 

