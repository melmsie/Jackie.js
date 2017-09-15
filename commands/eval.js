var config = require("../config.json")
var ownerID = config.ownerID
function clean(text) { 
	if (typeof(text) === "string")    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)); 
	else      return text;
}
exports.run = (bot, msg, args) => {
if (msg.author.id !== ownerID) return;   
		try {     
			const code = args     
			let evaled = eval(code);

			     
			if (typeof evaled !== "string")        evaled = require("util").inspect(evaled);


			msg.channel.send(clean(evaled), {
				code: "xl"
			});   
		} catch (err) {     
			msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);   
			console.log(err)
		}
// code here
}