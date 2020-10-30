import styled from 'styled-components';

const HeaderWrap = styled.header`
  text-align: center;
  padding: 4rem 0 3rem;
  grid-area: header;
  img {
    max-width: 180px;
  }
`;

const Header = (): JSX.Element => {
  return <HeaderWrap><img src="/logo.png" /></HeaderWrap>;
};

export default Header;
