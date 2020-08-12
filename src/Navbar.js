import React from "react";
import search from "./image/search.svg";
import deleteLogo from "./image/delete.svg";
import { SearchForm, Button } from "./styled";

const Navbar = () => {
  return (
    <div>
      <h1>Netfake</h1>
      <SearchForm>
        <Button>
          <img src={search} alt="search button" width="15" />
        </Button>
        <input type="text"></input>
        <Button>
          <img src={deleteLogo} alt="search button" width="10" />
        </Button>
      </SearchForm>
    </div>
  );
};

export default Navbar;
