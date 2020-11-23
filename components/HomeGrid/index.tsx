import styled from "styled-components";

export const GridOuter = styled.div`
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: 360px calc(60% - 360px) 40%;
    grid-template-rows: 42.5% 32.5% 25%;
    width: 100vw;
    height: 100vh;
    grid-template-areas:
      "facebook center  ig-tw"
      "spotify center slideshow"
      "buy-links center bottom-right";
  }
`;
