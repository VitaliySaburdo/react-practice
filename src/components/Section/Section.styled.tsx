import styled from "styled-components";

export const StyledSection = styled.section`
  overflow: visible;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (${(props) => props.theme.media.md}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;
