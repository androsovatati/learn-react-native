import styled from "styled-components";
import { PINK } from "../../constants/colors";

export const Wrapper = styled.TouchableOpacity`
  width: 145px;
  border-radius: 100px;
  background-color: ${PINK};
`;

export const Text = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: "GothamPro";
  text-align: center;
  line-height: 48px;
`;
