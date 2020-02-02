import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default resume = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;

	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	const player = client.player.get(message.guild.id)
	const queue = utils.getServerQueue.run(client, message.guild.id)
	if (player.paused)
		player.pause(false)
	else return new MessageEmbed()
		.setTitle(`I'm already playing.`)
	return new MessageEmbed()
		.setTitle(`Resumed ${queue[0].info.title}.`)
}

resume.shortDesc = 'Resumes the paused track.';
resume.args = false;
resume.aliases = [];
resume.category = categories.VOICE;