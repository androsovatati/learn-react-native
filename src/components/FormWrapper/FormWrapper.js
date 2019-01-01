import React from "react";
import { Wrapper } from "./FormWrapper.styles";

const FormWrapper = props => <Wrapper {...props}>{props.children}</Wrapper>;

export default FormWrapper;
