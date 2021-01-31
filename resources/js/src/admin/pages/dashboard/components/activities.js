import React from "react";

import Col from "../../../../components/col";
import Row from "../../../../components/row";
import Card from "../../../../components/card";
import Badge from "../../../../components/badge";
import CardBody from "../../../../components/card-body";
import CardTitle from "../../../../components/card-title";
import CardHeader from "../../../../components/card-header";

const Activities = () => {
  const activities = [];

  return (
    <Col md={6} lg={4}>
      <Card style={{ height: "24rem" }}>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardBody scrollable shadow>
          <div className="divide-y">
            {activities && activities.length === 0 ? (
              <Activity title="No recent activity" />
            ) : (
              activities.map(i => <Activity key={i.id} />)
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const Activity = ({ title }) => {
  return (
    <div>
      <Row>
        <Col width="auto" alignSelf="center">
          <Badge color="primary" />
        </Col>
        <Col>{title}</Col>
      </Row>
    </div>
  );
};

export default Activities;
