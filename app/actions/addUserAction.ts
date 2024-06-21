"use server";
import DbHelper from "../utils/dbHelpers";
import { Collection } from "mongodb";
import { redirect } from "next/navigation";

import { z } from "zod";

const formSchema = z.object({
	email: z.string().email("Please enter a valid email!"),
	password: z.string().min(8, "Please enter at least 8 character!"),
	userName: z.string()
});

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
	try {
		formSchema.parse({ email, password, userName });
		const response = await collection.insertOne(obj);
		if (response.insertedId) {
			console.log("merhaba");
		}
	} catch (error) {
		console.log(error.errmsg);
		return error.errmsg;
	}
	redirect("/users");
}
