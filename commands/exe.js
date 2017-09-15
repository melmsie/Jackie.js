var cmd = require("node-cmd")
var config = require("../config.json")
var ownerID = config.ownerID
exports.run = (bot, msg, args) =>{
 		if(msg.author.id !== ownerID) return;
		if(args){
			cmd.get(
        args,
        function(err, data, stderr){
          data = data.replace('149.56.98.94', "no dont ddos me");
					msg.channel.send(data, {
			code: true
		}); 
				}

    );
		}else
	   msg.reply("no args found sory");
}