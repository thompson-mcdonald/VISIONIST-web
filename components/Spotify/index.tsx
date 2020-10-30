import { Wrap } from "../styled";
import SectionHeader from "../SectionHeader";
import useMediaQuery from "use-media-query-hook";

function Spotify(): JSX.Element {
  const isMobile = useMediaQuery("(max-width: 740px)");
  const isDesktop = useMediaQuery("(min-width: 740px)");

  return (
    <Wrap pt={3} pb={3} pl={3} pr={3} justifySelf="start" gridArea="spotify" border="1px solid #888" width="100%" borderTop="0" borderBottom="0"> 
      {isMobile &&       <h2>Listen</h2>}
      {isMobile &&       <iframe src="https://open.spotify.com/embed/playlist/4n94p4sMQhQVO8xsw1QuOH" width="100%" height="300px" frameBorder="0" allow="encrypted-media"></iframe>}
      {isDesktop &&       <iframe src="https://open.spotify.com/embed/playlist/4n94p4sMQhQVO8xsw1QuOH" width="100%" height="100%" frameBorder="0" allow="encrypted-media"></iframe>}
    </Wrap>
  )
}

export default Spotify;