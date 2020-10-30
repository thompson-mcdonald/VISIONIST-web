import { Wrap } from "../styled";
import styled from "styled-components";
import {border} from "styled-system";

const BuyLink = styled.a`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4rem;
  display: block;
  width: 100%;
  padding: 3rem 0;
  &:link, &:visited {
    text-decoration: none;
    color: #111;
  }
`;

const LinkOuter = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  ${border}
`;

function BuyLinks():JSX.Element {
  return (
    <Wrap justifySelf="start" display="flex" alignItems="center" gridArea="buy-links" border={["none", "1px solid #888"]} width="100%">
      <LinkOuter borderRight={["none", "none", "1px solid #888"]}>
        <BuyLink href="#">Buy Merch</BuyLink>
      </LinkOuter>
      <LinkOuter>
        <BuyLink href="#">Buy Music</BuyLink>
      </LinkOuter>
    </Wrap>
  )
}

export default BuyLinks;