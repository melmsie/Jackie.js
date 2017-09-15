var hd = require("humanize-duration")
exports.run = (bot, msg) => {
		let info = `Uptime on this shard ${bot.shard.id}: ${hd(bot.uptime, {round: true})}
Guilds I'm serving commands i think: ${bot.guilds.size},
Total Shards: ${bot.shard.count},
Users I'm serving commands i think: ${bot.users.size},
Channels im probably serving: ${bot.channels.size},
I'm in ${bot.voiceConnections.size} voice channels right now,
Node.js Version: ${process.version}`
		msg.channel.send(info)
}