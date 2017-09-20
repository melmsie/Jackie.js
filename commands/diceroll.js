exports.run = (bot , msg, args) =>{
  if(args.length < 0){
  var roll = Math.floor(Math.random() * 6 + 1)
  msg.channel.send(`By rolling a Six Sided Die you got a ${roll}!`)
}else
  args = parseInt(args)
 var roll = Math.floor(Math.random() * args + 1)
 msg.channel.send(`By Rolling a ${args} sided die you a ${roll}!`)
}
