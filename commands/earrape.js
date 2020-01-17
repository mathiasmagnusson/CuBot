const { categories } = require('../config.json');
const { MessageEmbed } = require('discord.js');

exports.command = {
	shortDesc: 'You know what you want.',
	args: false,
	aliases: ['ear'],
	category: categories.VOICE,
	async run(message, args) {
		const { client } = message;
		const { commands, utils } = client;

		return utils.changeEqualizer.run(message, client.equalizers.earrape)
	}
}