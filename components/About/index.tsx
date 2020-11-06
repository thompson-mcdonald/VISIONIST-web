import { Wrap } from "../styled";
import { useState } from "react";

function About(): JSX.Element {
  const [opened, setOpened] = useState(false); 
  return (
    <Wrap id="about" justifySelf="start" gridArea="about" pl={[2, 2, 3]} pr={[2, 2, 3]}>
      {!opened && <a href="#about"  onClick={() => setOpened(true)}><h2>About</h2></a>}
      {opened && <a href="#about" onClick={()=> setOpened(false)}><h2>Close &times;</h2></a>}
      {opened ? (
        <Wrap>
          <h2>Agent</h2>
          <h2>Linktree</h2>
        </Wrap>
      ) : (
        ""
      )}
    </Wrap>
  )
}

export default About;