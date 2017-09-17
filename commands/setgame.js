let config = require("../config.json")
exports.run = (bot , msg , args) =>{
msg.reply("Your game will be reviewed.")
  let suggestedgame = `${msg.author.tag} : ${msg.author.id} suggested this game.
Game: ${args}`
  bot.channels.get(config.logger.gameschannel).send(suggestedgame) 
}