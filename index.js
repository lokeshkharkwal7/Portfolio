const exp = require('constants');
const express = require('express');
const { url } = require('inspector');
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));

// For getting details of the forms 
app.use(express.urlencoded()) 

// making an connection with mongo db database 
const aboutusform = require('./config');
const { stat } = require('fs');

app.get('/', (req, resp)=>{
    resp.render('home')
})

app.get('/contactus', (req, resp)=>{
    resp.render('contactus')
})

app.get('/experience', (req, resp)=>{
    resp.render('experience')
})

app.get('/about', (req, resp)=>{
    resp.render('about')
})

app.post('/contactUsInfo',(req,resp)=>{
    // console.log(req.query)
    resp.send(`The data is : ${req.body}`)
})

app.get('/skills', async(req, resp)=>{
    resp.render('skills')
})

// for testing purposes use the below one 
app.get('/test', async(req, resp)=>{
    resp.render('skills')
})

app.post('/submit-form', async(req, resp)=>{

   
    // Inserting the data to the Mongo DB Database 

    console.log(req.body)
    const user = JSON.stringify(req.body)
    const testdata = String(req.body.name)
    const data = new aboutusform(req.body)
    const status = await data.save()
    resp.render('outputRender',{name:testdata})
    // printing out the data into the console 
    info = await aboutusform.find({})
    console.log("Values inside the Mongodb database is : ")
    console.log(info)
    console.log(testdata)
})

app.listen(5050)
