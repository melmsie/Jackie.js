const fs = require("fs")
let banned = JSON.parse(fs.readFileSync("./banned.json", "utf8"));
let config = require("../config.json")
exports.run = (bot, msg, args) => {
var reasonn = msg.content.split(" ").slice(2)
	function save(){
	 fs.writeFile("./beaned.json", (err) => {
    if (err) console.error(err)
  });
}
	if(msg.author.id !== config.ownerID){
  msg.reply("no")
  return;
}else
if (!banned[msg.author.id]){ 
	 banned[msg.author.id] = {
    banned: true,
		 reason: reasonn
     };
	save();
	}else
 banned[args].banned = true
 banned[args].reason = reasonn
save(); 
}