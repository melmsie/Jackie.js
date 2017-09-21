let config = require("../config.json")
exports.run = (bot, msg) => {
let henlo = Math.floor(Math.random() * config.mm.length)
msg.channel.send(config.mm[henlo])
}
