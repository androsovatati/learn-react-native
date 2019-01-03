import styled from "styled-components";

export const SMALL = 24;
export const MEDIUM = 32;
export const LARGE = 40;

export const Wrapper = styled.View`
  align-items: center;
  margin-top: ${props => props.marginSize || SMALL}px;
`;
