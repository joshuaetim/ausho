import React from "react";

import Row from "../../../components/row";
import Container from "../../../components/container";

const Stats = React.lazy(() => import("./components/stats"));
const Payments = React.lazy(() => import("./components/payments"));
const Activities = React.lazy(() => import("./components/activities"));
const Investments = React.lazy(() => import("./components/investments"));

const Dashboard = () => {
  return (
    <Container>
      <Row cards deck>
        <Stats />
        <Activities />
        {/* <Investments />
        <Payments /> */}
      </Row>
    </Container>
  );
};

export default Dashboard;
