"use server";
import DbHelper from "../utils/dbHelpers";
import { Collection, ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export async function removeUser(id: string): Promise<boolean> {
	await DbHelper.connect();
	const collection: Collection = DbHelper.getCollection("users");
	const objectId = new ObjectId(id);
	const response = await collection.deleteOne({
		_id: objectId
	});
	console.log(response);
	revalidatePath("/");
	return response.deletedCount > 0;
}
