import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currenUser } = useSelector((state) => state.user);
  return currenUser ? <Outlet /> : <Navigate to="/sign-in" />;
}
