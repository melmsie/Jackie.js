exports.run = (bot, msg, args) =>{
 		let reply = `
Shards: ${bot.shard.count}
You're on this shard: ${bot.shard.id}
`
		msg.channel.send(reply, {
			code: true
		}); 
}