let banned = require("../banned.json")
let config = require("../config.json")
exports.run = (bot, msg,args) => {
if(msg.author.id !== config.ownerID){
  msg.reply('no')
  return
}else
banned.push(args)
}