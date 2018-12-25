import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Text, Button } from "react-native";

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
        <Text>Login screen</Text>
        <Button title="Login" onPress={this.login} />
      </ScreenWrapper>
    );
  }
}

export default Login;
