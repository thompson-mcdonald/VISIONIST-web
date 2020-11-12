import {Wrap} from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const TwitterWrap = styled(Wrap)`
  @media (max-width: 650px) {
    max-height: 300px;
    overflow-y: scroll;
  }
`;

const PostsWrap = styled.div`
  margin-top:26px;
`;

function Twitter(): JSX.Element {
  return (
    <TwitterWrap  pt={[3, 3, 0, 0]} pl={[3, 3, 0, 0]} pr={[3, 3, 0, 0]} justifySelf="start" position="relative" gridArea="twitter" width={["100%", "100%", "50%"]} border={["none", "none", "1px solid #888"]} borderLeft={["none", "none"]} overflowY="scroll">
      <SectionHeader url="https://twitter.com/__VISIONIST" username="VISIONIST____" name="Twitter" position={["static", "static", "fixed"]} zIndex="4" borderLeft={["none", "none", "1px solid #888"]} style={{marginLeft: "-1px"}}>Twitter</SectionHeader>
      <PostsWrap> 
        <a className="twitter-timeline" href="https://twitter.com/VISIONIST__?ref_src=twsrc%5Etfw">Tweets by VISIONIST__</a> <script async src="https://platform.twitter.com/widgets.js" data-charset="utf-8"></script>        
      </PostsWrap>
    </TwitterWrap>
  )
}

export default Twitter;