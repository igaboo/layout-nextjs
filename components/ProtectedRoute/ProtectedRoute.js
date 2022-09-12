import { UserContext } from "../../lib/UserContext";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({ children, userAllowed }) {
  const router = useRouter();

  const { currentUser } = useContext(UserContext);

  if (!userAllowed && currentUser) router.replace("/dashboard");

  if (userAllowed && !currentUser) router.replace("/login");

  return (
    <>{userAllowed ? currentUser && children : !currentUser && children}</>
  );
}
