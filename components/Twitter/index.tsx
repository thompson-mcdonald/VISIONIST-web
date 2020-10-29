import {Wrap} from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const TwitterWrap = styled(Wrap)`
`;

const PostsWrap = styled.div`

`;

function Twitter(): JSX.Element {
  return (
    <TwitterWrap justifySelf="start" gridArea="twitter" width={["100%", "50%"]} border={["none", "1px solid #888"]} borderLeft={["none", "none"]} overflowY="scroll">
      {/* <SectionHeader url="https://twitter.com/__VISIONIST" username="VISIONIST____" name="Instagram"></SectionHeader> */}
      <PostsWrap>
        <a class="twitter-timeline" href="https://twitter.com/VISIONIST__?ref_src=twsrc%5Etfw">Tweets by VISIONIST__</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>        
      </PostsWrap>
    </TwitterWrap>
  )
}

export default Twitter;