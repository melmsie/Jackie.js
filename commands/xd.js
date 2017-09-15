exports.run = (bot, msg) => {
	var args = msg.content.split(" ").slice(1)
const a = args[0].substring(0, 16),
			b = args[1 % args.length].substring(0, 16),
			c = args[2 % args.length].substring(0, 16),
			d = ' \n',
			s = (x) => ' '.repeat(x);

		let reply = a + s(11) + a + s(5) + b + s(2) + c + d +
			s(2) + a + s(7) + a + s(7) + b + s(5) + c + d +
			s(4) + a + s(3) + a + s(9) + b + s(6) + c + d +
			s(6) + s(Math.round(a.length / 2 - 1)) + a + s(11) + s(Math.round(a.length / 2)) + b + s(6) + c + d +
			s(4) + a + s(3) + a + s(9) + b + s(6) + c + d +
			s(2) + a + s(7) + a + s(7) + b + s(5) + c + d +
			a + s(11) + a + s(5) + b + s(2) + c;

		msg.channel.send(reply, {
			code: true
		}); 
}