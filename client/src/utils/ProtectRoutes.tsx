import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import axios from "axios";

type ChildrenType = {
  children: ReactNode;
};

function ProtectRoutes({ children }: ChildrenType) {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getLoggedUser = async () => {
      try {
        const loggedUser = await axios.get("/api/user/getLoggedUser");
        // console.log(loggedUser);
        setUserData(loggedUser.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getLoggedUser();
  }, []);

  // console.log(userData);

  // stops first render so that state changes for userData will take effect therefore preventing Navigation to /login even userData exists
  if (isLoading) {
    return null;
  }

  return <>{userData ? children : <Navigate to='/' />}</>;
}

export default ProtectRoutes;
