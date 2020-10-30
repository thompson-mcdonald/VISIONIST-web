import styled from "styled-components";
import { position, layout, display, padding } from "styled-system";

export const SectionHeaderWrap = styled.div`
  width: 100%;
  h2 {
    
  }
  @media (min-width: 750px) {
    border-bottom: 1px solid #888;
    padding: 2rem 1rem;
  }
  ${layout}
  ${position}
`;