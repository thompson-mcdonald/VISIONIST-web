import { Wrap } from "../styled";
import SectionHeader from "../SectionHeader";
import useMediaQuery from "use-media-query-hook";

function Spotify(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 940px)");
  const isDesktop = useMediaQuery("(min-width: 940px)");

  return (
    <Wrap
      id="listen"
      justifySelf="start"
      gridArea="spotify"
      border={["none", "none", "1px solid #888"]}
      borderTop={["none", "none", "none"]}
      borderBottom={["none", "none", "none"]}
      width="100%"
      pt={[4, 0, 0]}
      mt={[4, 0, 0]}
      pb={[4, 0, 0]}
      mb={[4, 0, 0]}
    >
      {isMobile && (
        <SectionHeader
          name="Listen"
          position={["static", "static", "fixed"]}
          zIndex="4"
        />
      )}
      <Wrap pl={[2, 2, 0]} pr={[2, 2, 0]} height="100%">
        {isMobile && (
          <iframe
            src="https://open.spotify.com/embed/playlist/2jEQISPpvuDtWndt8SxHJu"
            width="100%"
            height="300px"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        )}
        {isDesktop && (
          <iframe
            src="https://open.spotify.com/embed/playlist/2jEQISPpvuDtWndt8SxHJu"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        )}
      </Wrap>
    </Wrap>
  );
}

export default Spotify;
