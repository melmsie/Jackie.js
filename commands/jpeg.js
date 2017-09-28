let Jimp = require("jimp")
exports.run = (bot, msg, args) => {
	let url = args
	let user = msg.mentions.users.first();
 let attach = msg.attachments.first().url
	function jpeg(url) {
		Jimp.read(url, function(err, image) {
			if (err) {
				msg.reply("I FOUND A ERR " + err)
				return
			} else
				image.quality(1)
				.quality(1)
				.write("./jpeg.jpg")
			msg.channel.send({
				files: [{
					attachment: "./jpeg.jpg",
					name: 'jpeg.jpg'
				}]
			});
		})
	}
	if(args.length < 1 && !user && !attach){
	  msg.channel.send("i cant find a attachment, user or image url.")
	  return;
	}else
	if (!url.startsWith("http")) {
		if (!user) {
			url = attach
			jpeg(url)
		} else
			url = user.avatarURL
		jpeg(url)
	} else
		jpeg(url)
}
