exports.run = (bot, msg) => {
let helppls = `
() = required
<> = optional
If something is not working, Join this server. : https://discord.gg/gZTaH4p
***Core***
Help - Shows commands
Info - Shows Bots Infomation :information_desk_person:        
Website - Shows Website where you can find invite and server.
say (text) - Say stuff. :speech_balloon:
shards - Shard Info.
eval (text) - An Owner Only Command.
reload (text) -    ^
vps (text) -       ^
exe (text) -       ^
***Fun Commands***
diceroll - rolls a 6 sided dice. :game_die:
thot (@user) - shows how much of a thot you are :peach:
ascii (text) - turn text into ascii text lmao 
xd (text) - Puts text into a XD shape cause xd         
clapify (text) - your text with:clap:clap emojis.
eyeify (text) - Your text now:eyes:has:eyes:a:eyes:witness.
machine (text) - :b:ROKE.
**Music**
play (id or youtube link): Plays Music :microphone: from a youtube link or id. 
idsearch (text): Searchs for a Youtube ID. :mag:
stop: stops music.
***Image***
jpeg <attachment or @user or url or use https://www.image.jackiejs.xyz for a url>`
msg.author.send(helppls)
}