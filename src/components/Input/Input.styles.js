import styled from "styled-components";
import { GRAY, LIGHT_GRAY } from "../../constants/colors";

export const Wrapper = styled.TextInput`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  border-radius: 4px;
  color: ${GRAY};
  background-color: ${LIGHT_GRAY};
  font-size: 16px;
  font-family: "GothamPro";
`;
