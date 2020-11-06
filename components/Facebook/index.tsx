import { Wrap } from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader"

const FacebookWrap = styled(Wrap)`
  width: 100%;
  margin-top: -140px;
`;

function Facebook(): JSX.Element {
  return (
    <Wrap width={["100%", "100%"]} justifySelf="start" gridArea="facebook" border={["none", "none", "1px solid #888"]} borderRight="none" overflowY="hidden">
      <SectionHeader url="https://twitter.com/__VISIONIST" username="VISIONIST____" name="Facebook" position="relative" zIndex="4" />
      <FacebookWrap>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisionist.live&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="360" height="500" style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowTransparency allow="encrypted-media"></iframe>
      </FacebookWrap>    
    </Wrap>
  )
}

export default Facebook;
