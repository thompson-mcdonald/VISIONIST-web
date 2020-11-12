import { Wrap } from "../styled";
import styled from "styled-components";
import { border } from "styled-system";

const NavigationWrap = styled(Wrap)`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border: 1px solid #888;
  margin: 4rem 0;
`;

const NavButton = styled.a`
  width: 50%;
  padding: 2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  ${border}
`;

function PageNavigation({}): JSX.Element {
  return (
    <NavigationWrap display={["flex", "flex", "none"]}>
      <NavButton href="#buy" borderBottom="1px solid #888">Buy</NavButton>
      <NavButton href="#view" borderBottom="1px solid #888" borderLeft="1px solid #888">View</NavButton>
      <NavButton href="#listen">Listen</NavButton>
      <NavButton href="#about" borderLeft="1px solid #888">About</NavButton>
    </NavigationWrap>
  );
};

export default PageNavigation; 