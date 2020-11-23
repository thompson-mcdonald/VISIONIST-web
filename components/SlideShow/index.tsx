import styled from "styled-components";
import { Wrap } from "../styled";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { position, width } from "styled-system";
import useMediaQuery from "use-media-query-hook";

const Div = styled.div`
  ${width}
  ${position}
`;

interface SliderProps {
  className?: string;
}

const SliderWrap = styled(Slider)`
  overflow: hidden;
  ul li {
    list-style-type: none;
    display: inline-block;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const SlideShow: React.FC<SliderProps> = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 740px)");

  return (
    <Wrap
      pl={[2, 2, 0]}
      pr={[2, 2, 0]}
      border={["none", "none", "1px solid #888"]}
      borderTop={["none", "none", "none"]}
      borderBottom={["none", "none", "none"]}
      width={["100%", "100%", "100%"]}
      className={className}
      overflow="hidden"
      gridArea="slideshow"
      css={`
        background: #000;
      `}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={isMobile ? 130 : 90}
        totalSlides={3}
        interval={4000}
        isPlaying
        infinite
      >
        <Div position="relative" width="100%" zIndex="5">
          <Div position="absolute" left="0">
            <ButtonBack>Back</ButtonBack>
          </Div>
          <Div position="absolute" right="0">
            <ButtonNext>Next</ButtonNext>
          </Div>
        </Div>
        <SliderWrap>
          <Slide index={0}>
            <Image src="/texture1.JPG" />
          </Slide>
          <Slide index={1}>
            <Image src="/texture2.JPG" />
          </Slide>
          <Slide index={2}>
            <Image src="/texture3.JPG" />
          </Slide>
        </SliderWrap>
      </CarouselProvider>
    </Wrap>
  );
};

export default SlideShow;
