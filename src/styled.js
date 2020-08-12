import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height 35px; 
    border: 1px solid white; 
    
`;

export const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  background-color: transparent;
`;

export const SearchBar = styled.input`
  color: white;
  background-color: transparent;
  width: 250px;
  outline: none;
  border: none;
  height: 30px;
`;

export const Logo = styled.h1`
  color: #e50914;
`;
