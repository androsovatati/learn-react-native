import React from "react";
import { Wrapper, Text } from "./Button.styles";

const Button = props => (
  <Wrapper onPress={props.onPress}>
    <Text>{props.text}</Text>
  </Wrapper>
);

export default Button;
