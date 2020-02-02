import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default loop = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;
	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	const player = client.player.get(message.guild.id)
	player.loop = !player.loop;
	return new MessageEmbed()
		.setTitle(player.loop ? `Playing on repeat :repeat:` : `Playing like a normal person :speaker:`)
}

loop.usage = '';
loop.shortDesc = 'Toggles the loop function';
loop.args = false;
loop.aliases = ['repeat', 'lööp'];
loop.category = categories.MISC;