import styled from 'styled-components';
import { Wrap } from "../styled";
import { useState } from "react";

const AboutWrap = styled(Wrap)`
  bottom: -500px;
  position: relative;
  transition: .5s bottom;
  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &.active {
    bottom: 0;
    height: auto;
    transition: .5s height, .5s bottom;
  }
`;

const StyledA = styled.a`
  position: absolute;
  bottom: 0;
`;

function About(): JSX.Element {
  const [opened, setOpened] = useState(false); 
  return (
    <Wrap id="about" justifySelf="start" position="relative" gridArea="about" pl={[2, 2, 3]} pr={[2, 2, 3]} overflow="hidden" textAlign="left">
      {!opened && <StyledA href="#"  onClick={() => setOpened(true)}><h2>About</h2></StyledA>}
      {opened && <a href="#" onClick={(e)=> setOpened(false)}><h2>Close &times;</h2></a>}
      
        <AboutWrap className={opened ? "active" : ""}>
          <h2>About</h2>
          <p>Ullamcorper Commodo Parturient</p>
          <h2>Agent</h2>
          <p>Ullamcorper Commodo Parturient</p>
          <h2>Linktree</h2>
          <p>Ullamcorper Commodo Parturient</p>
        </AboutWrap>
    </Wrap>
  )
}

export default About;