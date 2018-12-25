import React from "react";
import BackgroundImage from "../BackgroundImage";
import { Wrapper } from "./ScreenWrapper.styles";

const ScreenWrapper = props => (
  <Wrapper>
    <BackgroundImage />
    {props.children}
  </Wrapper>
);

export default ScreenWrapper;
