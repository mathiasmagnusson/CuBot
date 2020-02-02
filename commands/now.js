import { categories } from '../config.js';

export default now = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	// TODO Remove now embed after the song is finished
	// Also works with skip

	let userCheckFail = utils.checkUserVoice.run(message);
	if (userCheckFail) return userCheckFail;

	let botCheckFail = utils.checkBotVoice.run(message);
	if (botCheckFail) return botCheckFail;

	let queue = await utils.getServerQueue.run(client, message.guild.id).slice()
	return utils.nowEmbed.run(queue)
}

now.shortDesc = 'Returns the currently playing track.';
now.args = false;
now.aliases = ['np', 'nowPlaying'];
now.category = categories.VOICE;