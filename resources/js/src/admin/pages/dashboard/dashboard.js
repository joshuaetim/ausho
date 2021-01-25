import React from "react";

import Row from "../../../components/row";

const Stats = React.lazy(() => import("./components/stats"));
const Payments = React.lazy(() => import("./components/payments"));
const Activities = React.lazy(() => import("./components/activities"));
const Investments = React.lazy(() => import("./components/investments"));

const Dashboard = () => {
  return (
    <Row cards deck>
      <Stats />
      <Activities />
      <Investments />
      <Payments />
    </Row>
  );
};

export default Dashboard;
