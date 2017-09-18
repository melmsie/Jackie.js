var Jimp = require("jimp")
exports.run = (bot, msg, args) => {
	let url = args
	var user = msg.mentions.users.first();
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
	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			jpeg(url)
		} else
			url = user.avatarURL
		jpeg(url)
	} else
		jpeg(url)
}