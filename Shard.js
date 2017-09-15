const hmmmm = require('discord.js');
const conffig = require("./config.json")
const manager = new hmmmm.ShardingManager(`${__dirname}/Jackie.js`, { 
  totalShards: "auto", 
  token: conffig.token
});

manager.spawn();
manager.on('launch', shard => console.log(`Successfully launched shard ${shard.id}`));