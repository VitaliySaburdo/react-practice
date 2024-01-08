import { StyledLink } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </>
  );
};
