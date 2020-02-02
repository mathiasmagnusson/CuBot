import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default command = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;

	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	const player = client.player.get(message.guild.id)
	const queue = utils.getServerQueue.run(client, message.guild.id)
	if (!player.paused)
		player.pause(true)
	else return new MessageEmbed()
		.setTitle(`I'm already paused.`)
	return new MessageEmbed()
		.setTitle(`Paused ${queue[0].info.title}.`)
}

command.shortDesc = 'Pauses the playing track.';
command.args = false;
command.aliases = [];
command.category = categories.VOICE;