import styled from 'styled-components';

export const GridOuter = styled.div`
  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 30% 35% 35%;
    grid-template-rows: 40% 30% 30%; 
    width: 100vw;
    height: 100vh;
    grid-template-areas:
      "facebook center  ig-tw"
      "spotify center video-view"
      "buy-links center bottom-right" ;
  }
`;
