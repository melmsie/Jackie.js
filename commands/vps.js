var config = require("./config.json")
var ovh = require('ovh')({
  endpoint: 'ovh-ca',
  appKey: config.ovh.appKey,
  appSecret: config.ovh.appSecret,
  consumerKey: config.ovh.consumerKey
});
exports.run = (bot, msg, args) =>{
if(msg.author.id !== "280158289667555328"){
			msg.reply("sTOP dONT TOUCHH VPS");
			return;
		}else
	if(args.startsWith("reboot")||args.startsWith("restart")){
		msg.channel.send("Restarting VPS... This should take up to 2 minutes.")
	ovh.request("POST", "/vps/{serviceName}/reboot", {
  serviceName: config.ovh.serviceName
 }, function (err, result) {
  console.log(err || result);
});
	}else
		var commandsvps = `
you can currently use these commands,
Restart - Restarts VPS.`
		msg.author.send(commandsvps);
	 return;
}