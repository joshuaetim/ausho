import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

const DASHBOARD = "/dashboard";
const INVESTORS = "/investors";
const INVESTOR = "/investor/:slug";

const Layout = React.lazy(() => import("./layout"));
const Investor = React.lazy(() => import("./pages/investor"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Investors = React.lazy(() => import("./pages/investors"));

const App = () => (
  <React.Suspense fallback={<p>Loading</p>}>
    <Switch>
      <Route exact path={DASHBOARD}>
        <Layout>
          <Dashboard />
        </Layout>
      </Route>
      <Route exact path={INVESTOR}>
        <Layout>
          <Investor />
        </Layout>
      </Route>
      <Route exact path={INVESTORS}>
        <Layout>
          <Investors />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  </React.Suspense>
);

export default App;
