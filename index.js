require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) => {
    res.send('heydudedotcom')
}) 
app.get('/utube',(req,res) => {
  res.send('<h1> leraning backend </h1>')
})
app.get('/whatsapp',(req,res)=>{
    res.send('<h2>hey dude whatsup</h2>')
  })

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
