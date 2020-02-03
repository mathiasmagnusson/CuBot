export default initiatePlayer = (client, guildID) => {
	if (!client.servers[guildID]) client.servers[guildID] = { queue: [], boost: false };
}