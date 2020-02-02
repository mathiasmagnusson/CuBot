import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default boost = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;

	return utils.changeEqualizer.run(message, client.equalizers.bassboost)
};

boost.shortDesc = 'Turns bass boosting on or off.';
boost.args = false;
boost.aliases = ['bass', 'eq'];
boost.category = categories.VOICE;