import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { getLoggedUser, loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getLoggedUser();
  }, []);

  return <div>Welcome To The Pokemon Kingdom {loggedUser.nickname}</div>;
};

export default Home;
