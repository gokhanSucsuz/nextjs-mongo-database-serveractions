"use server";
import DbHelper from "../utils/dbHelpers";
import { Collection } from "mongodb";
import { redirect } from "next/navigation";

export async function addUser(formData: FormData) {
	const userName = formData.get("userName");
	const email = formData.get("email");
	const password = formData.get("password");
	await DbHelper.connect();
	const collection: Collection = DbHelper.getCollection("users");
	const obj = {
		name: userName,
		email,
		password
	};
	const response = await collection.insertOne(obj);
	if (response.insertedId) {
		redirect("/users");
	}
	return response;
}
