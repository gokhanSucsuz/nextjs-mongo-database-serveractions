"use server";
import { redirect } from "next/navigation";
import DbHelper from "../utils/dbHelpers";
import { Collection, ObjectId } from "mongodb";

export async function updateUser(formData: FormData) {
	const id = formData.get("id").toString();
	const objId = new ObjectId(id);

	await DbHelper.connect();
	const collection: Collection = DbHelper.getCollection("users");
	const updatedObj = {
		name: formData.get("userName"),
		email: formData.get("email"),
		password: formData.get("password")
	};
	const response = await collection.updateOne(
		{ _id: objId },
		{ $set: updatedObj }
	);
	if (response.modifiedCount > 0) {
		redirect("/users");
	} else {
		return new Error("Update failed!");
	}
}
