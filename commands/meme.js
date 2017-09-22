let Jimp = require("jimp")
exports.run = (bot, msg, args) => {
		Jimp.read("https://www.api.jackiejs.xyz/imgen/mememan.jpg", function(err, image) {
			if (err) {
				msg.reply("I FOUND A ERR " + err)
				return
			} else
      Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
  image.print(font, 300, 150, args)
       .write("./mm.jpg");
			 msg.channel.send({
			 		 files: [{
			 			 attachment: "./mm.jpg",
			 			 name: 'meme_man_says.jpg'
			 		 }]
			 	 })
})

		})


}
