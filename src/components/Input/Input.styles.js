import styled, { css } from "styled-components";
import { GRAY, LIGHT_GRAY, PINK } from "../../constants/colors";

export const TextInput = styled.TextInput`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  color: ${GRAY};
  background-color: ${LIGHT_GRAY};
  font-size: 16px;
  font-family: "GothamPro";
  font-weight: 500;

  ${props =>
    props.isError &&
    css`
      color: ${PINK};
      border: 1px solid ${PINK};
    `}
`;
