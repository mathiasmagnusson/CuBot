import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default command = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;
	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;

	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	const player = client.player.get(message.guild.id);
	if (player.loop)
		player.loop = !player.loop;
	await player.stop()
	let queue = await utils.getServerQueue.run(client, message.guild.id).slice();

	console.general('Skipped track ?. New queue length for ?: ?', queue.shift().info.title, message.guild.name, queue.length);
	if (queue.length > 0)
		return utils.nowEmbed.run(queue);
	return null;
}

command.shortDesc = 'Skips the playing track.';
command.args = false;
command.aliases = ['s'];
command.category = categories.VOICE;