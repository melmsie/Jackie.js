exports.run = (bot, msg, args) =>{
 	if(!msg.guild){
		msg.reply("Music only works in guilds.")
	  return;
	}else
		if(!msg.member.voiceChannel){
			msg.reply("Please be in the voice channel i am in to stop.");
		return;
		}else
			msg.member.voiceChannel.leave();
      msg.reply('i stopped okay bye')
    return;
}