import styled from "styled-components";
import { Wrap } from "../styled";
import useMediaQuery from "use-media-query-hook";

const VideoWrapper = styled.div`
  background: #eee;
  width: 100%;
  box-sizing: border-box;
`;

interface VideoProps {
  title?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  pb?: any;
  pt?: any;
  pl?: any;
  pr?: any;
  id?: string;
  children: React.ReactNode;
}

const Video: React.FC<VideoProps> = ({
  title,
  border,
  borderTop,
  borderBottom,
  pb,
  pt,
  pr,
  pl,
  id,
  children,
}) => {
  const isMobile = useMediaQuery("(max-width: 740px)");

  return (
    <Wrap
      justifySelf="start"
      id={id}
      gridArea={"video-" + title}
      pt={pt}
      pb={pb}
      pr={pr}
      pl={pl}
      border={["none", border]}
      borderTop={["none", borderTop]}
      borderBottom={["none", borderBottom]}
      width="100%"
    >
      <Wrap>{isMobile && <h2>{title && title}</h2>}</Wrap>
      <VideoWrapper>{children}</VideoWrapper>
    </Wrap>
  );
};

export default Video;
