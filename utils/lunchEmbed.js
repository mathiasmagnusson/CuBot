import axios from 'axios';
import { MessageEmbed } from 'discord.js';
export default lunchEmbed = (week = false) => {
	let lunchEmbed = new MessageEmbed();
	if (week)
		lunchEmbed
			.setTitle('List of the whole week')
			.setDescription(
				(await axios.get('https://dev.yommail.tk/express/lunch?full')).data
					.map(day => `**${day.name}**\n${day.food}`)
			)
	else {
		let lunch = (await axios.get('https://dev.yommail.tk/express/lunch')).data;
		lunchEmbed
			.setTitle(`Lunch on ${lunch.name}`)
			.setDescription(lunch.food)
	}

	return lunchEmbed;
}