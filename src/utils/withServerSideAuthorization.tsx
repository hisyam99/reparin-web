import { getServerSession } from "next-auth";
import { GetServerSidePropsContext } from "next";
import authOptions from "@/auth";

export default function withServerSideAuthorization(
  allowedRoles: string[],
  Component: React.ComponentType
) {
  return async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );

    if (!session || !allowedRoles.includes(session.user.role)) {
      return {
        redirect: {
          destination: "/unauthorized",
          permanent: false,
        },
      };
    }

    return {
      props: {
        session,
      },
    };
  };
}
