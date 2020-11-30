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
    display: inline-flex;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  @media (min-width: 950px) {
    margin-top: 0;
    transform: scale(0.6);
  }
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
        background: #fafafa;
      `}
    >
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={isMobile ? 80 : 90}
        totalSlides={6}
        interval={4000}
        isPlaying
        infinite
      >
        <SliderWrap>
          <Slide index={0}>
            <Image src="/slogan.png" />
          </Slide>
          <Slide index={1}>
            <Image src="/ceiling1.jpg" />
          </Slide>
          <Slide index={2}>
            <Image src="/ceiling2.jpg" />
          </Slide>
          <Slide index={3}>
            <Image src="/laptop.jpg" />
          </Slide>
          <Slide index={4}>
            <Image src="/phone.jpg" />
          </Slide>
          <Slide index={5}>
            <Image src="/tv.jpg" />
          </Slide>
        </SliderWrap>
      </CarouselProvider>
    </Wrap>
  );
};

export default SlideShow;
