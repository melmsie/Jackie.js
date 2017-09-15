var config = require("../config.json")
exports.run = (bot, msg, args) => {
  if(msg.author.id !== config.ownerID)
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args}.js`)];
  msg.reply(`The command ${args} has been reloaded`);
};