import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  color: #130980;

  &.active {
    color: orange;
  }
`;
