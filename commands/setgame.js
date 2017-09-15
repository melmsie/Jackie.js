var config = require("../config.json")
exports.run = (bot, msg, args) => {
  if(msg.author.id !== config.ownerID) return
  bot.user.setPresence({ game: { name: args +` |+-help`, type: 0 } });
}