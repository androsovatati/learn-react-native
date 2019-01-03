import React from "react";
import { ActivityIndicator } from "react-native";
import { Wrapper, Text } from "./Button.styles";

const Button = props => (
  <Wrapper onPress={props.onPress}>
    {props.isLoading ? (
      <ActivityIndicator color="#fff" />
    ) : (
      <Text>{props.text}</Text>
    )}
  </Wrapper>
);

export default Button;
