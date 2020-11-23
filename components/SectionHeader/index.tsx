import { SectionHeaderWrap } from "./styled";

interface SectionProps {
  name?: string;
  url?: string;
  username?: string;
  position?: string[];
  zIndex?: string;
  borderRight?: string[];
  borderLeft?: string[];
  borderTop?: string[];
  style?: string[];
  marginTop?: string[];
  marginLeft?: string[];
  mb?: string[];
}

const SectionHeader: React.FC<SectionProps> = ({
  name,
  url,
  username,
  position,
  zIndex,
  borderRight,
  borderLeft,
  style,
  marginTop,
  marginLeft,
}) => {
  return (
    <SectionHeaderWrap
      position={position}
      zIndex={zIndex}
      borderRight={borderRight}
      borderLeft={borderLeft}
      style={style}
      marginTop={marginTop}
      marginLeft={marginLeft}
    >
      {name && <h2>{name}</h2>}
      {url && username && <a href={url}>{username}</a>}
    </SectionHeaderWrap>
  );
};

export default SectionHeader;
