import React from "react";
import search from "./image/search.svg";
import deleteLogo from "./image/delete.svg";
import { SearchForm, Button, NavbarContainer, SearchBar, Logo } from "./styled";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Netfake</Logo>
      <SearchForm>
        <Button>
          <img src={search} alt="search button" width="15" />
        </Button>
        <SearchBar type="text" />
        <Button>
          <img src={deleteLogo} alt="search button" width="10" />
        </Button>
      </SearchForm>
    </NavbarContainer>
  );
};

export default Navbar;
