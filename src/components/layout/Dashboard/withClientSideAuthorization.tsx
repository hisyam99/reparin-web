"Use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuthorizationDashboard = (Component: any, allowedRoles: string[]) => {
  const WrappedComponent = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;

      if (!session || !allowedRoles.includes(session.user.role)) {
        router.push("/dashboard/unauthorized");
      }
    }, [router, session, status]);

    if (
      status === "loading" ||
      !session ||
      !allowedRoles.includes(session.user.role)
    ) {
      return null; // Show a nothing
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `WithAuthorization(${
    Component.displayName || Component.name || "Component"
  })`;

  return WrappedComponent;
};

export default withAuthorizationDashboard;
