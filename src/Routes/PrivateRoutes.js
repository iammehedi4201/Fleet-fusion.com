import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UserInfoContext";
import "./Routes.css";
import { toast } from "react-toastify";
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  //useing Authcontext for sharing data
  const { user, loader } = useContext(AuthContext);

  //using loader

  if (loader) {
    return (
      <div className="loader-section">
        <span className="loader"></span>
      </div>
    );
  }

  if (user?.email && user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
