exports.run = (bot,msg) =>{
  var roll = Math.floor(Math.random() * 6 + 1)
  msg.channel.send(`By rolling a Six Sided Die you got a ${roll}!`)
}