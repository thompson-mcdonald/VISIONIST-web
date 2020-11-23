import { Wrap } from "../styled";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const FacebookWrap = styled(Wrap)`
  width: 100%;
  margin-top: -130px;
  max-height: 450px;
  @media (min-width: 950px) {
    margin-top: -140px;
  }
`;

const TexturedWrap = styled(Wrap)`
  background-image: url("/texture1.JPG");
  background-size: 100%;
`;

function Facebook(): JSX.Element {
  return (
    <TexturedWrap
      width={["100%", "100%"]}
      justifySelf="start"
      gridArea="facebook"
      border={["none", "none", "1px solid #888"]}
      borderTop={["none", "none", "none"]}
      overflowY="hidden"
      mb={[4, 4, 0]}
      mt={[4, 2, 0]}
    >
      <SectionHeader
        url="https://facebook.com/visionist.live"
        username="VISIONIST.live"
        name="Facebook"
        position={["relative"]}
        zIndex="4"
        marginTop={["-1px"]}
      />
      <FacebookWrap>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvisionist.live&tabs=timeline&width=360&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="360"
          height="500"
          style={{
            overflow: "hidden",
          }}
          scrolling="no"
          frameBorder="0"
          allowTransparency
          allow="encrypted-media"
        ></iframe>
      </FacebookWrap>
    </TexturedWrap>
  );
}

export default Facebook;
