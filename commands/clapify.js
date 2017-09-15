exports.run = (bot, msg) =>{
  var args = msg.content.split(" ").slice(1)
  args = args.join(":clap:")
  msg.channel.send(`:clap:${args}:clap:`)
}