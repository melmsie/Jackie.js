let jimp = require("jimp")
exports.run = (bot, msg , args) =>{
  let url = args
	let user = msg.mentions.users.first();
	function cancer(url) {

	jimp.read("https://www.api.jackiejs.xyz/imgen/cancer.png", function (err, image) {
    jimp.read(url, function (err, img) {
       img.resize(320 , 377)
      image.composite(img , 320 , 192)
           .write("./cancer.jpg")
           msg.channel.send({
             files: [{
               attachment: "./cancer.jpg",
               name: 'cancer.jpg'
             }]
           });
			});
  })
		}
// hai there, stop looking at my images pls thanks
	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			cancer(url)
		} else
			url = user.avatarURL
		cancer(url)
	} else
		cancer(url)
}
