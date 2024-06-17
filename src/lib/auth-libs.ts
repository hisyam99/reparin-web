import { getServerSession } from "next-auth";
import authOption from "@/auth";

export const authUserSession = async () => {
  const session = await getServerSession(authOption);
  return session?.user;
};
