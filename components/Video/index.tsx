import styled from "styled-components";
import { Wrap } from "../styled";
import useMediaQuery from "use-media-query-hook";

const VideoWrapper = styled.div`
  background: #eee;
  height: 240px;
  width: 100%;
`;

interface VideoProps {
  title?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  pb?: any;
  pt?: any;
}

const Video: React.FC<VideoProps> = ({ title, border, borderTop, borderBottom, pb, pt }) => {
  const isMobile = useMediaQuery("(max-width: 740px)");
  const isDesktop = useMediaQuery("(min-width: 740px)");

  return (
    <Wrap justifySelf="start" gridArea={"video-" + title} pt={pb} pb={pb} border={["none", border]} borderTop={["none", borderTop]} borderBottom={["none", borderBottom]} width="100%">
      <Wrap pl={2} pr={2}>
        {isMobile && <h2>{title && title}</h2>}
      </Wrap>
      <VideoWrapper />
    </Wrap>
  )
};

export default Video;