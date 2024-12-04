import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const history = useHistory();

  useEffect(() => {

    localStorage.removeItem("token");
    history.push("/");
  }, [history]);

  return (
    <div>
      <h2>You have logged out successfully.</h2>
    </div>
  );
};

export default Logout;
