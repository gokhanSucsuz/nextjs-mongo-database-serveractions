import dbHelpers from "../utils/dbHelpers";
import DbHelper from "../utils/dbHelpers";
import { ObjectId } from "mongodb";

interface Users {
	id: string;
	name: string;
	email: string;
	password: string;
}

export async function getAllUsers() {
	await dbHelpers.connect();
	const collection = DbHelper.getCollection("users");
	const res = await collection.find().toArray();
	const userArray = res.map((item) => {
		return {
			email: item.email,
			name: item.name,
			password: item.password,
			id: item._id.toString()
		};
	});
	return userArray;
}
export async function getUser(id: string) {
	await dbHelpers.connect();
	const collection = DbHelper.getCollection("users");
	const res = await collection.findOne({ _id: new ObjectId(id) });
	return res;
}

export async function getAllMovies() {
	await dbHelpers.connect();
	const collection = DbHelper.getCollection("movies");
	const res = await collection.find().limit(200).toArray();
	return res;
}
export async function getMovie(movieId: string) {
	const objId = new ObjectId(movieId);
	await dbHelpers.connect();
	const collection = DbHelper.getCollection("movies");
	const res = await collection.findOne({ _id: objId });
	return res;
}
