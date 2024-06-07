import { getServerSession } from "next-auth";
import authOption from "@/auth";

export default async function Page() {
  const session = await getServerSession(authOption);

  if (!session || session.user.role !== "admin") {
    return (
      <section className="py-24">
        <div className="container">
          <h1 className="text-2xl font-bold">
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">Admin Page</h1>
      </div>
    </section>
  );
}
