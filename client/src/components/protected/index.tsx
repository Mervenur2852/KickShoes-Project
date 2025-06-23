import type { FC } from "react";
import useUser from "../../service/user";
import Loader from "../loader";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header";

interface Props {
  allowedRoles?: string[];
}

const Protected: FC<Props> = ({ allowedRoles }) => {

  const { user, isLoading } = useUser();

  if (isLoading) return <Loader />;

  if (allowedRoles && !allowedRoles?.includes(user?.role))
    return <Navigate to="/" replace />;

  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
  return <Navigate to="/login" replace />;
};

export default Protected;