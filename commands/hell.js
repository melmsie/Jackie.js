let jimp = require("jimp")
exports.run = (bot, msg , args) =>{
  let url = args
	let user = msg.mentions.users.first();
  let attach = msg.attachments.first().url
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
if(args.length < 1 && !user && !attach){
  msg.channel.send("i cant find a attachment, user or image url.")
  return;
}else
	if (!url.startsWith("http")) {
		if (!user) {
			url = attach
			hell(url)
		} else
			url = user.avatarURL
		hell(url)
	} else
		hell(url)
}
