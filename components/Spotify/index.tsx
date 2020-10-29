import { Wrap } from "../styled";

function Spotify(): JSX.Element {
  return (
    <Wrap pt={4} pb={4} pl={2} pr={2} justifySelf="start" gridArea="spotify" border="1px solid #888" width="100%" borderTop="0" borderBottom="0">
      <iframe src="https://open.spotify.com/embed/playlist/4n94p4sMQhQVO8xsw1QuOH" width="100%" height="100%" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </Wrap>
  )
}

export default Spotify;