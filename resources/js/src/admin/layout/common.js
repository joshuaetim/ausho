import React from "react";

import AppIcon from "../../icons/apps";
import UserPlusIcon from "../../icons/user-plus";
import NavDropdown from "../../components/nav-dropdown";
import DropdownItem from "../../components/dropdown-item";
import CreateInvestor from "../../modals/create-investor";

export const Apps = ({ color = "dark" }) => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  return (
    <NavDropdown card tChildren={<AppIcon />}>
      <DropdownItem onClick={toggle} icon={<UserPlusIcon color={color} />}>
        Create Investor
      </DropdownItem>

      <CreateInvestor show={modal} toggle={toggle} />
    </NavDropdown>
  );
};
