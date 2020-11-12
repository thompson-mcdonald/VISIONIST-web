import { Title } from "./styled";

interface HeroProps {
  title?: string;
  subtitle?: string;
}
const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </>
  );
};

export default Hero;
