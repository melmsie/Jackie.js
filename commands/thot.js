exports.run = (bot, msg, args, user) => {
  var thot = Math.floor(Math.random() * 100)
  if(user){
    if(user !== bot.user){
      msg.channel.send(`${user} has a ${thot}% chance of being a thot. :peach:`);
    }else 
      msg.reply('delet urself')
  }else
    msg.channel.send("Tag someone you think is a thot. :peach:")
}