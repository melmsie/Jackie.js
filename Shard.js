const hmmmm = require('discord.js');
const config = require("./config.json")
const logger = require("./logger.js")
const manager = new hmmmm.ShardingManager(`${__dirname}/Jackie.js`, {
  totalShards: "auto",
  token: config.keys.token
});

manager.spawn();
manager.on('launch', shard => logger.info(`Launched a Shard. ${shard.id}`));
