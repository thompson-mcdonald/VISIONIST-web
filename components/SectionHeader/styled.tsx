import styled from "styled-components";
import { position, layout, display, padding, border } from "styled-system";

export const SectionHeaderWrap = styled.div`
  width: 100%;
  padding: 1rem;
  background: #FAFAFA;
  h2 {
    text-transform: uppercase;
  }
  @media (min-width: 750px) {
    border-bottom: 1px solid #888;
    padding: 2rem 1rem;
  }
  ${border}
  ${layout}
  ${position}
`;