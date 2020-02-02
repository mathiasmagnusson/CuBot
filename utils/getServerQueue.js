export default {
	run(client, guildID) {
		return client.servers[guildID].queue;
	}
}