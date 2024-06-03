import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import clientPromise from "@/lib/mongo/client";

let client: MongoClient;
let db: Db;
let users: Collection<Document>;

async function init(): Promise<void> {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    users = db.collection("users");
  } catch (error) {
    throw new Error("Failed to establish connection to database");
  }
}

/////////////
/// USERS ///
/////////////

interface User {
  _id: ObjectId;
  email: string;
  [key: string]: any;
}

interface UserResponse {
  user?: { [key: string]: any };
  error?: string;
}

interface UpdateResponse {
  success?: boolean;
  error?: string;
}

export async function findUserById(userId: string): Promise<UserResponse> {
  try {
    if (!users) await init();

    const user = await users.findOne({ _id: new ObjectId(userId) });

    if (!user) throw new Error();

    return { user: { ...user, _id: user._id.toString() } };
  } catch (error) {
    return { error: "Failed to find the user." };
  }
}

export async function findUserByEmail(email: string): Promise<UserResponse> {
  try {
    if (!users) await init();

    const user = await users.findOne({ email });

    if (!user) throw new Error();

    return { user: { ...user, _id: user._id.toString() } };
  } catch (error) {
    return { error: "Failed to find the user." };
  }
}

export async function updateUser(
  email: string,
  update: Partial<User>
): Promise<UpdateResponse> {
  try {
    if (!users) await init();

    await users.updateOne({ email }, { $set: update });

    return { success: true };
  } catch (error) {
    return { error: "Failed to update the user." };
  }
}
