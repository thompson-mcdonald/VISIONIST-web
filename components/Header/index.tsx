import styled from "styled-components";

const HeaderWrap = styled.header`
  text-align: center;
  padding: 3rem 0 1rem;
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
    a img {
      margin: 4rem 0 4rem;
    }
    padding-top: 0;
    // overflow-x: scroll;
  }
  @media (min-width: 750px) and (max-height: 600px) {
    a img {
      margin: 2rem 0 2rem;
    }
  }
`;

const Header = (): JSX.Element => {
  return (
    <HeaderWrap>
      <a href="/">
        <img src="/logo.png" />
      </a>
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
