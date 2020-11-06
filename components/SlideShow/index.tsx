import { Wrap } from '../styled';
import styled from 'styled-components';

function SlideShow(): JSX.Element {
  return (
    <Wrap pl={2} pr={2} border={["none", "none", "1px solid #888"]} borderTop={["none", "none", "1px solid #888"]} borderLeft={["none", "none", "none"]} width={["100%", "100%", "50%"]}>
      <h2>Slideshow</h2>
    </Wrap>
  )
}

export default SlideShow;