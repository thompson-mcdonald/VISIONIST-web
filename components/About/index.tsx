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
  &:hover {
    cursor: pointer;
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
  color: #ff1c1f;
  padding: 2rem 5rem;
  text-align: left;
  left: 0;
  &:hover {
    cursor: initial;
  }
  p {
    margin-bottom: 1rem;
    font-size: 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  h2 {
    font-size: 2.4rem;
    margin: 0.2rem 0 1rem;
  }
  a:link,
  a:visited {
    color: #ff1c1f;
    text-decoration: underline;
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
  &:link,
  &:visited {
    text-decoration: none !important;
  }
  &.active {
    transition: opacity 0.5s, transform 0.5s;
  }
  @media (min-width: 950px) {
    font-size: 1.5rem;
    background: #000;
    padding: 1rem;
    &:link,
    &:visited {
      color: #fff;
    }
  }
`;

const CloseButton = styled.a`
  // position: fixed;position
  z-index: 7;
  // top: auto;top
  // position: fixed;position
  visibility: hidden;
  transition: opacity 0.25s;
  &:link,
  &:visited {
    text-decoration: none !important;
  }
  &.active {
    display: block;
    visibility: visible;
    transition: opacity 0.5s;
  }
  @media (min-width: 950px) {
    &.active {
      // position: absolute;position
      // top: 0;top
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
    <Wrap id="about" justifySelf="start" gridArea="about">
      <Wrap position="relative">
        <StyledA href="" onClick={handleClick}>
          About
        </StyledA>
      </Wrap>
      <AboutContainerWrap className={opened ? "active" : ""}>
        <AboutWrap className={opened ? "active" : ""}>
          <h2>
            Manager:{" "}
            <a
              href="mailto:info@visionist.live"
              rel="noreferrer"
              target="_blank"
            >
              info@visionist.live
            </a>
          </h2>
          <h2>
            <a
              href="https://linktr.ee/visionist"
              target="_blank"
              rel="noreferrer"
            >
              Linktree
            </a>
          </h2>
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
