export default getServerQueue = (client, guildID) => {
	return client.servers[guildID].queue;
}