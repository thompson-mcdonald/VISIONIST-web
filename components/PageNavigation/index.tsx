import { Wrap } from "../styled";
import styled from "styled-components";
import { border } from "styled-system";
import About from "../About";
import useMediaQuery from "use-media-query-hook";

const NavigationWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 4rem 0;
  border: 1px solid #888;
  @media (min-width: 750px) {
    padding: 1rem 2rem 1rem;
  }
  @media (min-width: 950px) {
    border: none;
    padding: 1rem 3rem 1rem;
    margin: 0;
  }
  @media (min-width: 1300px) {
    border: none;
    padding: 1rem 5rem 1rem;
    margin: 0;
  }
`;

const NavButton = styled.a`
  padding: 2rem;
  width: 50%;
  font-size: 2rem;
  text-transform: uppercase;
  ${border}
  @media (min-width: 950px) {
    width: auto;
    padding: 0;
  }
`;

const DivButton = styled.div`
  padding: 2rem;
  width: 50%;
  font-size: 2rem;
  text-transform: uppercase;
  ${border}
  @media (min-width: 950px) {
    width: auto;
    padding: 0;
  }
`;

function PageNavigation(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 950px)");

  return (
    <NavigationWrap display={["flex"]}>
      {isMobile && (
        <>
          <NavButton
            href="#buy"
            borderBottom={["1px solid #888", "1px solid #888", "none"]}
          >
            Buy
          </NavButton>
          <NavButton
            href="#view"
            borderBottom={["1px solid #888", "1px solid #888", "none"]}
            borderLeft={["1px solid #888", "1px solid #888", "none"]}
          >
            View
          </NavButton>
          <NavButton href="#listen">Listen</NavButton>
        </>
      )}
      <DivButton
        href="#about"
        borderLeft={["1px solid #888", "1px solid #888", "none"]}
      >
        <About />
      </DivButton>
    </NavigationWrap>
  );
}

export default PageNavigation;
