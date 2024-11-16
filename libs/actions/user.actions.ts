"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import connectToDB from "../mongoose";

export async function updateUser(
  userId: string,
  username: string ,
  name: string,
  bio: string,
  image: string,
  path: string
): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      // upsert => update if exist , create if not exist
      { upsert: true }
    );

    //   update cached data at profile/edit path (without waiting revalidation period)
    if (path === "profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}
