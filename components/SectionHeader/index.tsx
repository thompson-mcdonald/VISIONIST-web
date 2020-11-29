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
  top?: string[];
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
  top,
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
      top={top}
    >
      {name && <h2>{name}</h2>}
      {url && username && (
        <a href={url} target="_blank" rel="noreferrer">
          {username}
        </a>
      )}
    </SectionHeaderWrap>
  );
};

export default SectionHeader;
