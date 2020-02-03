const channels = (sequelize, DataTypes) => sequelize.define('channels', {
	serverID: {
		type: DataTypes.STRING,
		unique: true,
		primaryKey: true
	},
	channelID: DataTypes.STRING,
	name: DataTypes.STRING,
})
export default channels;