let config = require("../config.json")
exports.run = (bot, msg) => {
let henlo = Math.floor(Math.random() * config.mm.length / 2 + 1)
let bepsi = Math.floor(Math.random() * config.mm.length / 2 - 1)
    henlo = bepsi + henlo
msg.channel.send(config.mm[henlo])
}
