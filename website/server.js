const express = require("express")
const app = express()
const path = require("path")
app.use(express.static('website'))
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/index.html'))
})
app.get('/commands',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/commands.html'))
})
app.get('/usage',(req,res)=>{
  let data = `nothing yet smh`
  res.status(200).send(data)
})
app.get('/errors',(req,res)=>{
  let data = `no errors right now yay`
  res.status(200).send(data)
})
app.listen('80', console.log('Server ready.'))
