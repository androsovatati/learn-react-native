import styled from "styled-components";
import { PINK } from "../../constants/colors";

export const Wrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 145px;
  height: 48px;
  border-radius: 100px;
  background-color: ${PINK};
`;

export const Text = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: "GothamPro";
`;
