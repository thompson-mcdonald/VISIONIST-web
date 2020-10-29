import styled from "styled-components";
import { position, layout } from "styled-system";

export const SectionHeaderWrap = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  h2 {
    
  }
  @media (min-width: 750px) {
    border-bottom: 1px solid #888;
  }
  ${layout}
  ${position}
`;