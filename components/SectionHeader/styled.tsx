import styled from "styled-components";
import { position, layout, border, margin } from "styled-system";

export const SectionHeaderWrap = styled.div`
  width: 100%;
  padding: 1rem .8rem 2rem;
  margin-top: 1rem;
  background: #FAFAFA;
  font-size: 1.4rem;
  h2 {
    text-transform: uppercase;
  }
  @media (min-width: 950px) {
    border-bottom: 1px solid #888;
    padding: 2rem 1rem;
    margin-top: 0;
    font-size: 1rem;
  }
  ${border}
  ${layout}
  ${position}
  ${margin}
`;
