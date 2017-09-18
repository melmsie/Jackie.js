let Jimp = require("jimp")
exports.run = (bot, msg, args) => {
	let url = args
	let user = msg.mentions.users.first();
	function lit(url) {
		Jimp.read(url, function(err, image) {
			if (err) {
				msg.reply("I FOUND A ERR " + err)
				return
			} else
				image.color([
    { apply: 'lighten', params: [ 50 ] }
])
				.write("./lit.jpg")
		msg.channel.send({
				files: [{
					attachment: "./lit.jpg",
					name: 'lit.png'
				}]
			});	
		})
		
	}
	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			lit(url)
		} else
			url = user.avatarURL
		lit(url)
	} else
		lit(url)
}