import { Wrap } from "../styled";
import { useState } from "react";


function About(): JSX.Element {
  const [opened, setOpened] = useState(false);
  return (
    <Wrap justifySelf="start" gridArea="about">
      <a href="#"  onClick={() => setOpened(true)}><h2>About</h2></a>
      {opened ? (
        <Wrap>
          <h2>Agent</h2>
          <h2>Linktree</h2>
        </Wrap>
      ) : (
        <div>Nope</div>
      )}
    </Wrap>
  )
}

export default About;