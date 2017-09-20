var config = require("../config.json")
const Cleverbot = require('cleverbot-node');  
var cleverbot = new Cleverbot;
exports.run = (bot, msg, args) => {

    cleverbot.configure({botapi: config.keys.cleverkey});
    cleverbot.write(args, function (response) {
          msg.channel.startTyping();
      setTimeout(() => {
        msg.channel.send(response.output).catch(console.error);
        msg.channel.stopTyping();
      }, Math.floor(Math.random() * 6 + 3));
    });
}
