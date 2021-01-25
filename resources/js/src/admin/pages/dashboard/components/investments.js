import React from "react";

import Col from "../../../../components/col";
import Card from "../../../../components/card";
import Table from "../../../../components/table";
import CardTitle from "../../../../components/card-title";
import CardHeader from "../../../../components/card-header";

const Activities = () => {
  return (
    <Col width={12}>
      <Card>
        <CardHeader>
          <CardTitle>Recent Investments</CardTitle>
        </CardHeader>
        <Table card center nowrap datatable responsive>
          <Header />
          <Body />
        </Table>
      </Card>
    </Col>
  );
};

const Header = () => (
  <thead>
    <tr>
      <th>Invoice Subject</th>
      <th>Invoice Subject</th>
      <th>Invoice Subject</th>
      <th>Invoice Subject</th>
      <th>Invoice Subject</th>
      <th>Invoice Subject</th>
    </tr>
  </thead>
);

const Body = () => (
  <tbody>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
      <Rows key={i} />
    ))}
    <Rows />
  </tbody>
);

const Rows = () => (
  <tr>
    <td> Carlson Limited </td>
    <td> Carlson Limited </td>
    <td> Carlson Limited </td>
    <td> Carlson Limited </td>
    <td> Carlson Limited </td>
    <td> Carlson Limited </td>
  </tr>
);

export default Activities;
