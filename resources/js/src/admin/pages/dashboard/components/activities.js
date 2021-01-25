import React from "react";

import Col from "../../../../components/col";
import Row from "../../../../components/row";
import Card from "../../../../components/card";
import Badge from "../../../../components/badge";
import CardBody from "../../../../components/card-body";

const Activity = () => {
  return (
    <div>
      <Row>
        <Col width="auto" alignSelf="center">
          <Badge color="primary" />
        </Col>
        <Col>
          Change deprecated html tags to text decoration classes (#29604)
        </Col>
      </Row>
    </div>
  );
};

const Activities = () => {
  return (
    <Col md={6} lg={4}>
      <Card style={{ height: "24rem" }}>
        <CardBody scrollable shadow>
          <div className="divide-y">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
              <Activity key={i} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Activities;
