import { Wrap } from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const TwitterWrap = styled(Wrap)`
  overflow-y: scroll;
  @media (max-width: 650px) {
    max-height: 500px;
    overflow-y: hidden;
  }
`;

const PostsWrap = styled.div`
  margin-top: -60px;
  max-height: 500px;
  overflow-y: scroll;
  padding: 0 1rem;
  @media (min-width: 780px) {
    max-height: 320px;
    margin-top: 26px;
  }
  @media (min-width: 950px) {
    margin-top: 26px;
    max-height: none;
    padding: 0;
  }
`;

const TwitterSectionHeader = styled(SectionHeader)``;

function Twitter(): JSX.Element {
  return (
    <TwitterWrap
      pt={[3, 3, 0]}
      mt={[3, 2, 0]}
      pb={[3, 2, 0]}
      mb={[3, 2, 0]}
      justifySelf="start"
      position="relative"
      gridArea="twitter"
      width={["100%", "100%", "50%"]}
      border={["none", "none", "1px solid #888"]}
      borderTop={["none", "none", "1px solid #888"]}
      borderLeft={["none", "none"]}
    >
      <TwitterSectionHeader
        url="https://twitter.com/VISIONIST__"
        username="@VISIONIST__"
        name="Twitter"
        position={["relative", "relative", "relative", "fixed"]}
        zIndex="4"
        borderLeft={["none", "none", "1px solid #888"]}
        borderTop={["none", "none", "1px solid #888"]}
        marginLeft={["0", "0", "-1px"]}
        marginTop={["0", "0", "0"]}
        top={["-10px", "0", "0"]}
      >
        Twitter
      </TwitterSectionHeader>
      <PostsWrap>
        <a
          className="twitter-timeline"
          href="https://twitter.com/VISIONIST__?ref_src=twsrc%5Etfw"
        >
          Tweets by VISIONIST__
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          data-charset="utf-8"
        ></script>
      </PostsWrap>
    </TwitterWrap>
  );
}

export default Twitter;
