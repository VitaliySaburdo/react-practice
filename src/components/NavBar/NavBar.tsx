import { StyledLink } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </>
  );
};
