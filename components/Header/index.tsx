import styled from "styled-components";

const HeaderWrap = styled.header`
  text-align: center;
  padding: 4rem 0 1rem;
  grid-area: header;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 2rem;
    max-width: 250px;
  }
  @media (min-width: 950px) {
    padding-top: 0;
  }
`;

const Header = (): JSX.Element => {
  return (
    <HeaderWrap>
      <img src="/logo.png" />
      <img
        src="/bw-logo.png"
        style={{
          mixBlendMode: "multiply",
        }}
      />
    </HeaderWrap>
  );
};

export default Header;
