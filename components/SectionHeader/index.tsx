import { SectionHeaderWrap } from './styled';

interface SectionProps {
  name?: string;
  url?: string;
  username?: string;
  position?: string;
  zIndex?: string;
  borderRight?:string;
  borderLeft?: string;
}

const SectionHeader: React.FC<SectionProps> = ({name, url, username, position, zIndex, borderRight, borderLeft}) => {
  return (
    <SectionHeaderWrap position={position} zIndex={zIndex} borderRight={borderRight} borderLeft={borderLeft}>
      {name && <h2>{name}</h2>}
      {url && username && <a href={url}>{username}</a>}
    </SectionHeaderWrap>
  )
}

export default SectionHeader;