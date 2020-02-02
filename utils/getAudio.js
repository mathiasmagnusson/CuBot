import axios from 'axios';
import { lavalink } from '../config.js'

export default {
	async run(query) {
		const res = await axios.get(`http://${lavalink.host}:${lavalink.port}/loadtracks?identifier=${encodeURIComponent(query)}`, {
			headers: {
				Authorization: lavalink.password
			}
		})
		// TODO playlist support
		return res.data.tracks;
		// if (playlist)
		// 	return res.data.tracks
		// return res.data.tracks[0];
	}
}