import React from "react";
import BackgroundImage from "../BackgroundImage";
import Logo from "../Logo";
import { Wrapper, LogoWrapper } from "./ScreenWrapper.styles";

const ScreenWrapper = props => (
  <Wrapper>
    <BackgroundImage />
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    {props.children}
  </Wrapper>
);

export default ScreenWrapper;
