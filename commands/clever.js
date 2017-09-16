var config = require("../config.json")
exports.run = (bot, msg, args) => {
  var Cleverbot = require('cleverbot-node');  
 var cleverbot = new Cleverbot;
    cleverbot.configure({botapi: config.cleverkey});
    cleverbot.write(args, function (response) {
          msg.channel.startTyping();
      setTimeout(() => {
        msg.channel.send(response.output).catch(console.error);
        msg.channel.stopTyping();
      }, Math.floor(Math.random() * 6 + 3));
    });
}