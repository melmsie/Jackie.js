let jimp = require("jimp")
exports.run = (bot, msg , args) =>{
  let url = args
	let user = msg.mentions.users.first();
	function stupuid(url) {
	jimp.read("https://www.api.jackiejs.xyz/imgen/stupid.png", function (err, image) {
    jimp.read(url, function (err, img) {
       img.resize(150 , 150)
      image.composite(img , 10 , 90)
           .write("./stupid.jpg")
           msg.channel.send({
             files: [{
               attachment: "./stupid.jpg",
               name: 'stupid.jpg'
             }]
           });
  })
})
		}

	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			stupuid(url)
		} else
			url = user.avatarURL
		stupuid(url)
	} else
		stupuid(url)
}
