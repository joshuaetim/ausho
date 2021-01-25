import React from "react";
import { Link } from "react-router-dom";

import Col from "../../../../components/col";
import Row from "../../../../components/row";
import Card from "../../../../components/card";
import Avatar from "../../../../components/avatar";
import CardBody from "../../../../components/card-body";

const Stats = () => {
  return (
    <>
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </>
  );
};

const StatCard = () => {
  return (
    <Col
      sm={6}
      lg={3}
      as={Link}
      width={12}
      to="/investors"
      className="text-reset text-decoration-none"
    >
      <Card width="sm">
        <CardBody>
          <Row align="center">
            <Col width="auto">
              <Avatar bg="blue" color="white">
                a
              </Avatar>
            </Col>
            <Col>
              <div className="font-weight-medium">1,352</div>
              <div className="text-muted">Active Investors</div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Stats;
