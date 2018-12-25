import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Login extends Component {
  login = () => {
    this.props.navigation.navigate("HomeStack");
  };

  render() {
    return (
      <View>
        <Text>Login screen</Text>
        <Button title="Login" onPress={this.login} />
      </View>
    );
  }
}

export default Login;
