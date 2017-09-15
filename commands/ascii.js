const fig = require("figlet")
exports.run = (bot, msg, args) => {
      let result = args
		if (result.length > 7) {     
			msg.channel.send("Sorry, But I only support 7 characters.");     
			return;   
		} else

			var asciiText = fig.textSync(result);   

		msg.channel.send(asciiText, {   
			code: true 
		})  
}