var Emojify = require("@gaikema/emojify");
exports.run = (bot, msg, args) => {
var emojifyTest = new Emojify.Emojify(args);
msg.channel.send(emojifyTest.emojify());
}