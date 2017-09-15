var Jimp = require("jimp")
var snekfetch = require("snekfetch")
var fs = require("fs")
exports.run = (bot, msg, args) =>{
if(!args.startsWith("http")){
	var user = msg.mentions.users.first();
	if(!user){
Jimp.read(msg.attachments.first().url, function (err, image) {
    if(err){ msg.reply("I FOUND A ERR "+ err)
           return
           }else
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
	}else
Jimp.read(user.avatarURL, function (err, image) {
    if(err){ msg.reply("I FOUND A ERR "+ err)
           return
           }else
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
}else
	Jimp.read(args, function (err, image) {
    if(err){ msg.reply("I FOUND A ERR "+ err)
           return
           }else
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