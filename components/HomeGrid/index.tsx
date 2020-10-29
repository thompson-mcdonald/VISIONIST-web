import styled from 'styled-components';

export const GridOuter = styled.div`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 32.5% 35% 32.5%;
    grid-template-rows: 35% 30% 35%; 
    width: 100vw;
    height: 100vh;
    grid-template-areas:
      "instagram center fb-tw"
      "spotify center video-view"
      "buy-links center bottom-right" ;
  }
`;
