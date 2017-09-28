let jimp = require("jimp")
exports.run = (bot, msg , args) =>{
  let url = args
	let user = msg.mentions.users.first();
	function hell(url) {
	jimp.read("https://www.api.jackiejs.xyz/imgen/hell.png", function (err, image) {
    jimp.read(url, function (err, img) {
       img.resize(500 , 429)
      image.composite(img , 0 , 0)
           .write("./hell.jpg")
           msg.channel.send({
             files: [{
               attachment: "./hell.jpg",
               name: 'oh_god.jpg'
             }]
           });
  })
})
		}
	if (!url.startsWith("http")) {
		if (!user) {
			url = msg.attachments.first().url
			hell(url)
		} else
			url = user.avatarURL
		hell(url)
	} else
		hell(url)
}
