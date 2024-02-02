// // racism 

// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/e-comm')
// const schema = mongoose.Schema({
//     name : String,
//     marks : Number,
//     course : String
// })

// const collection = mongoose.model('products',schema)
// async function getInformation(){
//     console.log('Values are : ')
//    const output = await collection.find({})
//    console.log(output[4].name)
//    console.log(output[4].course)
//    console.log(output[4].marks)
//    console.log(output[4])
// //    console.log(output[4]['$isNew'])

   

// }

// getInformation()

const contactedCollection = require('./config')
async function getInfo(){
    const data = {
        Name:
"Shantanu",
Email:
"Shantanu@gmail.com",
Phone:
9776767679,
Placeholder:
"Message is Yo!",
Message:
"Hello Friend"
    }
    const status = new contactedCollection(data)
    await status.save()
    const info =  await contactedCollection.find({})

    console.log('thing started')
    console.log(info) 
}
getInfo()

