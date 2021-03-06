import React from "react";
import search from "./image/search.svg";
import deleteLogo from "./image/delete.svg";
import { SearchForm, Button, NavbarContainer, SearchBar, Logo } from "./styled";

const Navbar = ({ setTitle, title, fetchMovies, count }) => {
  return (
    <NavbarContainer>
      <Logo>Netfake</Logo>
      <SearchForm>
        <Button onClick={(e) => fetchMovies(e, count)}>
          <img src={search} alt="search button" width="15" />
        </Button>
        <SearchBar
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button>
          <img src={deleteLogo} alt="search button" width="10" />
        </Button>
      </SearchForm>
    </NavbarContainer>
  );
};

export default Navbar;
