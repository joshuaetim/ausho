import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../../../components/card";
import Table from "../../../components/table";
import NoData from "../../../components/no-data";
import Container from "../../../components/container";
import { useFetchAllInvestors } from "../../../store/api/investors";

const Investors = () => {
  const { data: investors, isError, isLoading } = useFetchAllInvestors();

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading</h1>;
  if (investors && investors?.length === 0) return <NoData />;

  return (
    <Container>
      <Card>
        <Table card center nowrap datatable>
          <Header />
          <Body data={investors} />
        </Table>
      </Card>
    </Container>
  );
};

const Header = () => (
  <thead>
    <tr>
      <th className="id">Id</th>
      <th className="user-id">User Id</th>
      <th>Name</th>
      <th className="text-truncate phone">Phone Number</th>
      <th className="text-truncate email">Email Address</th>
      <th className="text-truncate account-name">Account Name</th>
      <th className="text-truncate account-number">Account Number</th>
      <th className="bank-name">Bank Name</th>
    </tr>
  </thead>
);

const Rows = ({ data }) => {
  const history = useHistory();

  return (
    <tr
      className="cursor-pointer"
      onClick={() => history.push(`/investor/${data?.slug}`)}
    >
      <td className="w-1 id">{data?.id}</td>
      <td className="w-1 user-id">{data?.user_id}</td>
      <td className="py-3 text-truncate">{data?.name}</td>
      <td className="text-truncate phone">{data?.phone}</td>
      <td className="text-truncate email">{data?.email}</td>
      <td className="text-truncate account-name">{data?.account_name}</td>
      <td className="account-number">{data?.account_number}</td>
      <td className="bank-name">{data?.bank}</td>
    </tr>
  );
};

const Body = ({ data }) => (
  <tbody>
    {data?.map(data => (
      <Rows data={data} key={data.id} />
    ))}
  </tbody>
);

export default Investors;
