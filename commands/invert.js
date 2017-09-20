var Jimp = require("jimp")
exports.run = (bot, msg, args) => {
	let url = args
	let user = msg.mentions.users.first();
	function invert(url) {
		Jimp.read(url, function(err, image) {
			if (err) {
				msg.reply("I FOUND A ERR " + err)
				return
			} else
				image.invert()
				     .write("./invert.jpg");
		msg.channel.send({
				files: [{
					attachment: "./invert.jpg",
					name: "invert.jpg"
				}]
			});
		})
	}
	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			invert(url)
		} else
			url = user.avatarURL
		invert(url)
	} else
		invert(url)
}
