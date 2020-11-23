import { Wrap } from "../styled";
import styled from "styled-components";
import { border, padding } from "styled-system";
import useMediaQuery from "use-media-query-hook";
import SectionHeader from "components/SectionHeader";

const BuyLink = styled.a`
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 3.2rem;
  display: block;
  width: 100%;
  text-align: left;
  &:link,
  &:visited {
    text-decoration: underline;
    color: #111;
  }
  @media (min-width: 950px) {
    font-size: 1.8rem;
    line-height: 2rem;
    text-align: center;
    padding: 3rem 0;
    height: 100%;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    &:link,
    &:visited {
      text-decoration: none;
      color: #111;
    }
  }
`;

const LinkOuter = styled.div`
  height: 100%;
  // display: flex;
  // align-items: center;
  // flex-direction: row;
  width: 100%;
  @media (min-width: 950px) {
    width: 50%;
    flex-direction: column;
  }
  ${border}
  ${padding}
`;

function BuyLinks(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 950px)");

  return (
    <Wrap
      id="buy"
      justifySelf="start"
      display="flex"
      alignItems="center"
      gridArea="buy-links"
      border={["none", "none", "1px solid #888"]}
      borderBottom={["none", "none", "none"]}
      width="100%"
      flexDirection={["column", "column", "row"]}
      pl={[0, 0, 0]}
      pr={[0, 0, 0]}
      pt={[4, 4, 0]}
      pb={[4, 4, 0]}
    >
      {isMobile && (
        <SectionHeader
          url="https://twitter.com/__VISIONIST"
          name="Buy"
          position={["static", "static", "fixed"]}
          zIndex="4"
          borderLeft={["none", "none", "1px solid #888"]}
          marginLeft={["-1px"]}
        >
          Buy
        </SectionHeader>
      )}
      <LinkOuter
        borderRight={["none", "none", "1px solid #888"]}
        pl={[2, 2, 0]}
        pr={[2, 2, 0]}
      >
        <BuyLink href="#">Buy Merch</BuyLink>
      </LinkOuter>
      <LinkOuter pl={[2, 2, 0]} pr={[2, 2, 0]}>
        <BuyLink href="#">Buy Music</BuyLink>
      </LinkOuter>
    </Wrap>
  );
}

export default BuyLinks;
