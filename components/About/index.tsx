import styled from "styled-components";
import { Wrap } from "../styled";
import { useState } from "react";

const AboutContainerWrap = styled(Wrap)`
  display: none;
  &.active {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6;
  }
  @media (min-width: 950px) {
    &.active {
      position: absolute;
    }
  }
`;

const AboutWrap = styled(Wrap)`
  position: absolute;
  transition: 0.5s bottom, opacity 1s;
  opacity: 0;
  margin-top: 2rem;
  background: white;
  color: red;
  padding: 2rem 5rem;
  text-align: left;
  left: 0;
  p {
    margin-bottom: 1rem;
    font-size: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    font-size: 2.4rem;
  }
  &.active {
    height: auto;
    overflow: scroll;
    transition: 0.5s height, 0.5s bottom, opacity 1s;
    opacity: 1;
  }
  @media (min-width: 950px) {
    left: auto;
  }
`;

const StyledA = styled.a`
  transition: opacity 0.5s, transform 0.5s;
  font-size: 2rem;
  text-transform: uppercase;
  padding-bottom: 1rem;
  &.active {
    transition: opacity 0.5s, transform 0.5s;
  }
  @media (min-width: 950px) {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled(StyledA)`
  // position: fixed;
  z-index: 7;
  // top: auto;
  // position: fixed;
  visibility: hidden;
  transition: opacity 0.25s;
  &.active {
    display: block;
    visibility: visible;
    transition: opacity 0.5s;
  }
  @media (min-width: 950px) {
    &.active {
      // position: absolute;
      // top: 0;
    }
  }
`;

function About(): JSX.Element {
  const [opened, setOpened] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (opened) {
      return setOpened(false);
    }
    if (!opened) {
      return setOpened(true);
    }
  };

  return (
    <Wrap
      id="about"
      justifySelf="start"
      gridArea="about"
      // pl={[2, 2, 3]}
      // pr={[2, 2, 3]}
      // pb={[0, 3, 0]}
    >
      <Wrap position="relative">
        <StyledA href="" onClick={handleClick}>
          About
        </StyledA>
      </Wrap>
      <AboutContainerWrap className={opened ? "active" : ""}>
        <AboutWrap className={opened ? "active" : ""}>
          <h2>About</h2>
          <p>Ullamcorper Commodo Parturient</p>
          <h2>Agent</h2>
          <p>Ullamcorper Commodo Parturient</p>
          <h2>Linktree</h2>
          <p>Ullamcorper Commodo Parturient</p>
          <CloseButton
            href=""
            className={opened ? "active" : ""}
            onClick={handleClick}
          >
            Close &times;
          </CloseButton>
        </AboutWrap>
      </AboutContainerWrap>
    </Wrap>
  );
}

export default About;
