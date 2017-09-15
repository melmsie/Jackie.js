var search = require("youtube-search");
var config =  require("../config.json")
exports.run = (bot, msg, args) =>{
  	var opts = {
  maxResults: 5,
  key: config.ytkey,
  order: "relevance"
};
 
search(args, opts, function(err, results) {
  if(err) return console.log(err);
 let thingss = `
1: ID: ${results[0].id} Title: ${results[0].title} by ${results[0].channelTitle}
2: ID: ${results[1].id} Title: ${results[1].title} by ${results[1].channelTitle}
3: ID: ${results[2].id} Title: ${results[2].title} by ${results[2].channelTitle}
4: ID: ${results[3].id} Title: ${results[3].title} by ${results[3].channelTitle}
5: ID: ${results[4].id} Title: ${results[4].title} by ${results[4].channelTitle}

To choose say +-play [id] to start playing!`
  msg.channel.send(thingss)
});

}