let config = require("../config.json")
let games = require("../games.json")
exports.run = (bot, msg, args) => {
if(msg.author.id !== config.ownerID){
  msg.reply("no")
}else
  games.push(args)
  console.log(games)
  msg.channel.send(games)
}