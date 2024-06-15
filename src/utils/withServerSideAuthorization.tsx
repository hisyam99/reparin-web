import { getSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";

export const withServerSideAuthorization = async (context: GetServerSidePropsContext, allowedRoles: string[]) => {
  const session = await getSession(context);

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
