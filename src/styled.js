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

export const MovieCover = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 5rem;
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5rem;
`;

export const LoadButton = styled.button`
  border: 1px solid white;
  color: white;
  background-color: transparent;
  padding: 1rem;
  &:hover {
    color: black;
    background-color: white;
  }
`;
