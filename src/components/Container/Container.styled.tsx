import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (${(props) => props.theme.media.smToMd}) {
    width: 360px;
  }

  @media screen and (${(props) => props.theme.media.mdToLg}) {
    width: 768px;
    padding: 0 20px;
  }

  @media screen and (${(props) => props.theme.media.lg}) {
    width: 1420px;
    padding: 0;
  }
`;
