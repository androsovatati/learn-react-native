import React from "react";
import { Wrapper } from "./FormField.styles";

const FormField = props => (
  <Wrapper marginSize={props.marginSize}>{props.children}</Wrapper>
);

export default FormField;
