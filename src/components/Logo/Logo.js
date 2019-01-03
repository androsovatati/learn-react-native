import React from "react";
import { Image } from "./Logo.styles";
import logoImg from "../../assets/images/logo.png";

const Logo = props => <Image source={logoImg} resizeMode="contain" />;
export default Logo;
