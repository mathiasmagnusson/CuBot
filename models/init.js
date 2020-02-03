import Sequelize from "sequelize";
import { promises as fs } from "fs";

export default async function init() {
	let database = new Sequelize("CuBot", "user", "password", {
		host: "localhost",
		dialect: "sqlite",
		logging: false,
		storage: "database.sqlite"
	});

	let modelFiles = (await fs.readdir("./models")).filter(
		file => !file.startsWith("init")
	);
	let models = [];
	for await (let modelFile of modelFiles) {
		let model = await import(`./${modelFile}`);
		model = model.default(database, Sequelize);
		await model.sync();
		models[model.name] = model;
	}
	return { database, models };
}
