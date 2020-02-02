import { categories } from '../config.js';
import { MessageEmbed } from 'discord.js';

export default menu = async (message, args) => {
	const { client } = message;
	const { commands, utils } = client;
	try {
		return await utils.lunchEmbed.run(true);
	} catch (error) {
		throw error;
	}
}

menu.shortDesc = 'Returns the week\'s menu';
menu.args = false;
menu.aliases = ['m'];
menu.category = categories.MISC;