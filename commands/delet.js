let jimp = require("jimp")
exports.run = (bot, msg , args) =>{
  let url = args
	let user = msg.mentions.users.first();
	function delet(url) {
	jimp.read("https://www.api.jackiejs.xyz/imgen/delet.png", function (err, image) {
    jimp.read(url, function (err, img) {
       img.resize(192 , 192)
      image.composite(img , 122 , 136)
           .write("./delet.jpg")
           msg.channel.send({
             files: [{
               attachment: "./delet.jpg",
               name: 'will_you_delet_this.jpg'
             }]
           });
  })
})
		}

	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			delet(url)
		} else
			url = user.avatarURL
		delet(url)
	} else
		delet(url)
}
