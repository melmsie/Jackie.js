var yt = require("ytdl-core")
exports.run = (bot, msg, args) => {
  if(!msg.guild){
     msg.reply("sorry but music is only for guilds and servers");
		return
		}else
			if(!msg.member.voiceChannel){
				msg.reply("you have to be in a voice channel.")
			}else

    // Only try to join the sender's voice channel if they are in one themselves
msg.member.voiceChannel.join()
        .then(connection => { // Connection is annstance of VoiceConnection
				const streamOptions = { seek: 0, volume: 1, passes:2, bitrate: "auto"};
				const stream = yt(args, { filter : 'audioonly' });
		 const dispatcher = connection.playStream(stream, streamOptions);
				msg.reply('joined and playing, note music is kinda new and it might not work if you are gonna use music or anything related to voice, please always have a strong internet connection.')
				dispatcher.on('end', () => {
			msg.channel.send("i finished the song okay BYEEEEEEEE")
  msg.member.voiceChannel.leave()
 });
})
        .catch(console.log);
}