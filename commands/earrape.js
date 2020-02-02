import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default earrape = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	return utils.changeEqualizer.run(message, client.equalizers.earrape)
};

earrape.shortDesc = 'You know what you want.';
earrape.args = false;
earrape.aliases = ['ear'];
earrape.category = categories.VOICE;