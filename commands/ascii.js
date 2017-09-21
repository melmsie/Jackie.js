const fig = require("figlet")
exports.run = (bot, msg, args) => {
if(args.length < 1){
	msg.reply("Say something to make into ascii smh")
  return;
}else
		if (args.length > 7) {     
			msg.channel.send("Sorry, But I only support 7 characters.");     
			return;   
		} else

			var asciiText = fig.textSync(args);   

		msg.channel.send(asciiText, {   
			code: true 
		})  

}
