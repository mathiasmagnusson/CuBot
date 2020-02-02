import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default volume = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;
	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	const player = client.player.get(message.guild.id);
	const volume = player.state.volume;

	let toSend = new MessageEmbed()

	if (args) {
		const newVolume = parseInt(args.split(" ")[0])
		if (newVolume > 200 || newVolume < 0)
			return 'The volume cannot to be above 200 or below 0.';

		player.volume(newVolume)

		toSend.setTitle('Changed volume')
			.setDescription(`From ${volume} to ${newVolume}!`)
	} else {
		toSend.setTitle('Current volume')
			.setDescription(`${volume}%`)
	}
	return toSend;
}

volume.shortDesc = 'Changes the volume of the playing track.';
volume.longDesc = 'Returns the current volume if no args included.';
volume.args = false;
volume.aliases = ['v', 'vol'];
volume.category = categories.VOICE;