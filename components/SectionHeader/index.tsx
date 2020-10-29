import { SectionHeaderWrap } from './styled';

interface SectionProps {
  name: string;
  url?: string;
  username?: string;
}

const SectionHeader: React.FC<SectionProps> = ({name, url, username}) => {
  return (
    <SectionHeaderWrap>
      {name && <h2>{name}</h2>}
      {url && username && <a href={url}>{username}</a>}
    </SectionHeaderWrap>
  )
}

export default SectionHeader;