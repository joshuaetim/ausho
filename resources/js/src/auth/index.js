import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const SIGN_IN = "/signin";
const SIGN_UP = "/signup";

const SignUp = React.lazy(() => import("./pages/signup"));
const SignIn = React.lazy(() => import("./pages/signin"));

const App = () => (
  <React.Suspense fallback={<p>Loading</p>}>
    <Switch>
      <Route exact path={SIGN_UP}>
        <SignUp />
      </Route>
      <Route exact path={SIGN_IN}>
        <SignIn />
      </Route>
      <Route>
        <Redirect to={SIGN_IN} />
      </Route>
    </Switch>
  </React.Suspense>
);

export default App;
