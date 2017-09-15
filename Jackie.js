const discord = require("discord.js");
const bot = new discord.Client();
const client = bot
var config = require("./config.json")
var prefix = config.prefix;
var ownerID = config.ownerID;
let dBots = config.botsd;
let lsbots = config.lbots;
let msbots = config.mbots;
var oliyBots = config.oliy;
const snekfetch = require("snekfetch");
function serverCount() {
  client.shard.fetchClientValues("guilds.size").then(result => {
  const guildsizes = result.reduce((prev, val) => prev + val, 0)
      snekfetch.post(`https://discordbots.org/api/bots/${client.user.id}/stats`)
          .set("Authorization", oliyBots)
          .send({"server_count": guildsizes})
          .then(console.log("[oliyBots] Post Stats!"))

  snekfetch.post(`https://bots.discord.pw/api/bots/${client.user.id}/stats`)
      .set("Authorization", dBots)
      .send({"server_count": client.guilds.size})
      .then(console.log("[dBots] Post Stats!"))
  snekfetch.post(`https://list.passthemayo.space/api/bots/${client.user.id}`)
	    .set("Authorization",lsbots)
		.send({"server_count": guildsizes})
		.then(console.log("[lbots] Post Stats!"))
   snekfetch.post(`https://novo.archbox.pro/api/bots/${client.user.id}`)
		        .set("Authorization", msbots)
		        .send({"server_count":guildsizes})
	          .then(console.log("[mbots] Post Stats!"));
 	})
}

bot.on('ready', () => {   
	bot.user.setPresence({ game: { name: `+-help|${bot.guilds.size} servers|${client.shard.count}/${client.shard.id}`, type: 0 } });
  serverCount();
})
bot.on('guildCreate', (guild) =>{
	bot.user.setPresence({ game: { name: `+-help|${bot.guilds.size} servers|${client.shard.count}/${client.shard.id}`, type: 0 } });
	serverCount();
});
bot.on('guildDelete', (guild) =>{
	bot.user.setPresence({ game: { name: `+-help|${bot.guilds.size} servers|${client.shard.count}/${client.shard.id}`, type: 0 } });
	serverCount();
});

bot.on('message', msg => {
  if (msg.author.bot || !msg.content.startsWith(prefix) || bot.user.id !== "327135412806221826" || prefix !== "+-"){ 
		return;
	}
  const args = msg.content.split(" ").slice(1).join(" ")
  const command = msg.content.split(" ").shift().slice(prefix.length)
  var user = msg.mentions.users.first();
 console.log(command)
  try {
     let commandFile = require(`./commands/${command}.js`)
     commandFile.run(bot, msg, args, user)
    } catch (err) {
      console.error(err);
   }
});
bot.login(config.token);