import { Wrap } from "../styled";

interface SliderProps {
  className?: string;
}

const SlideShow: React.FC<SliderProps> = ({ className }) => {
  return (
    <Wrap
      pl={2}
      pr={2}
      border={["none", "none", "1px solid #888"]}
      borderTop={["none", "none", "none"]}
      borderBottom={["none", "none", "none"]}
      width={["100%", "100%", "100%"]}
      className={className}
    >
      <h2>Slideshow</h2>
    </Wrap>
  );
};

export default SlideShow;
