import React from "react";
import { useSelector } from "react-redux";

import Authenticated from "./admin";
import Unauthenticated from "./auth";

const App = () => {
  const auth = useSelector(state => state.auth.isAuth);

  switch (auth) {
    case true:
      return <Authenticated />;
    case false:
    default:
      return <Unauthenticated />;
  }
};

export default App;
