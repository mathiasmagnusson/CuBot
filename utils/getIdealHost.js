export default getIdealHost = (client) => {
	const foundNode = client.player.nodes.find(node => node.ready && node.region === "amsterdam");
	if (foundNode) return foundNode.host;
	return client.player.nodes.first().host;
}
