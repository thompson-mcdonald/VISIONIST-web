import { Wrap } from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader"

const FacebookWrap = styled(Wrap)`
  @media (min-width: 750px) {
    width: 50%;
  }
`;

function Facebook(): JSX.Element {
  return (
    <FacebookWrap justifySelf="start" gridArea="facebook" border={["none", "1px solid #888"]} borderRight="none">
      <SectionHeader url="https://twitter.com/__VISIONIST" username="VISIONIST____" name="Facebook"></SectionHeader>
    </FacebookWrap>
  )
}

export default Facebook;