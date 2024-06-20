const { MongoClient, ServerApiVersion } = require("mongodb");
const { ObjectId } = require("mongodb");
const uri =
	"mongodb+srv://admin:admin123@cluster0.sbhd6bs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

export async function getAllUsers() {
	try {
		await client.connect();
		const db = await client.db("sample_mflix");
		const res = await db.collection("users").find().toArray();
		console.log(res);
		return res;
	} catch (error) {
		console.error("Error in connectionDb:", error);
		return [];
	}
}

export async function getAllMovies() {
	try {
		await client.connect();
		const db = await client.db("sample_mflix");
		const res = await db
			.collection("movies")
			.find()
			.skip(200)
			.limit(100)
			.toArray();
		console.log(res[0].plot);
		return res;
	} catch (error) {
		console.error("Error in connectionDb:", error);
		return [];
	}
}
export async function getMovie(movieId) {
	const objId = new ObjectId(movieId);
	try {
		await client.connect();
		const db = client.db("sample_mflix");
		const res = await db.collection("movies").findOne({ _id: objId });
		console.log(res);
		return res;
	} catch (error) {
		console.error("Error in connectionDb:", error);
		return [];
	}
}
