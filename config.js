export default {
	prefix: "!",
	lavalink: {
		host: "localhost",
		port: 2333,
		password: "youshallnotpass",
		nodes: [{
			host: "localhost",
			port: 2333,
			region: "amsterdam",
			password: "youshallnotpass"
		}]
	},
	webserver: { port: 2334 },
	categories: {
		VOICE: "78fecf",
		UTILS: "ee7674",
		MISC: "baabda"
	},
	openWeatherAPI: process.env.OW_KEY,
	token: process.env.DJS_TOKEN
};