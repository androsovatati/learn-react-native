import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import FormField from "../../components/FormField";
import FormTitle from "../../components/FormTitle";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Text } from "react-native";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  login = () => {
    this.props.navigation.navigate("HomeStack");
  };

  render() {
    return (
      <ScreenWrapper>
        <FormWrapper>
          <FormTitle>Log in</FormTitle>
          <FormField>
            <Input />
          </FormField>
          <FormField>
            <Input />
          </FormField>
          <FormField>
            <Button text="Login" onPress={this.login} />
          </FormField>
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Login;
