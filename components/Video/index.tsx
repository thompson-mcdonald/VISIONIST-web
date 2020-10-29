import styled from "styled-components";
import { Wrap } from "../styled";

const VideoWrapper = styled.div`
  background: #eee;
  height: 200px;
  width: 100%;
`;

interface VideoProps {
  title?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
}

const Video: React.FC<VideoProps> = ({ title, border, borderTop, borderBottom }) => {
  return (
    <Wrap justifySelf="start" gridArea={"video-" + title} border={["none", border]} borderTop={["none", borderTop]} borderBottom={["none", borderBottom]} width="100%">
      <Wrap pl={2} pr={2}>
        <h2>{title && title}</h2>
      </Wrap>
      <VideoWrapper />
    </Wrap>
  )
};

export default Video;