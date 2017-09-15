exports.run = (bot, msg) =>{
  var args = msg.content.split(" ").slice(1)
  args = args.join(":eyes:")
  msg.channel.send(`:eyes:${args}:eyes:`)
}