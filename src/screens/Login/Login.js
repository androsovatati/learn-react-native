import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
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
          <Text>Login screen</Text>
          <Button text="Login" onPress={this.login} />
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Login;
