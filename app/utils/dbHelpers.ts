import { MongoClient, Db, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://admin:admin123@cluster0.sbhd6bs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
const dbName = "sample_mflix";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

class DbHelper {
	db: Db;
	isConnected: boolean;

	constructor() {
		this.db = client.db(dbName);
		this.isConnected = false;
	}

	async connect() {
		if (!this.isConnected) {
			try {
				await client.connect();
				this.isConnected = true;
				console.log("Connected to db!");
			} catch (error) {
				console.error("Failed to connect to db:", error);
				throw error;
			}
		}
	}

	getCollection(collectionName: string) {
		return this.db.collection(collectionName);
	}

	async close() {
		if (this.isConnected) {
			await client.close(true);
			this.isConnected = false;
			console.log("Connection is closed!");
		}
	}
}

export default new DbHelper();
