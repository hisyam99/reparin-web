"use server";

import { updateUser } from "@/lib/mongo/users";

// Define the function signature with types
export async function updateName(name: string, email: string): Promise<void> {
  await updateUser(email, { name });
}
