import React from "react";
import { useHistory } from "react-router-dom";

import Box from "./box";
import Button from "./button";
import Container from "./container";
import DatabaseIcon from "../icons/database-off";

const NoData = React.forwardRef((props, ref) => {
  const history = useHistory();
  const handleClick = () => history.goBack();

  return (
    <Container flex>
      <Box
        flex
        center
        flexGrow
        ref={ref}
        {...props}
        align="center"
        justify="center"
        direction="column"
      >
        <DatabaseIcon size="lg" className="mb-3" />
        <h2 className="mb-0">No Data Available</h2>
        <span className="mb-3 text-muted">
          There is no data to show right now
        </span>
        <Button variant="primary" onClick={handleClick}>
          Go Back!
        </Button>
      </Box>
    </Container>
  );
});

export default NoData;
