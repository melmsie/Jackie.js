const express = require("express")
const app = express()
const path = require("path")

app.use(express.static('website'))
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname+'/index.html'))
})
app.get('/commands',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname+'/index.html'))
})
app.listen('80', console.log('Server ready.'))
