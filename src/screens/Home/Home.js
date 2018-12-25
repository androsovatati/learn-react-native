import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Text, Button } from "react-native";

class Home extends Component {
  static navigationOptions = {
    header: null
  };

  logout = () => {
    this.props.navigation.navigate("LoginStack");
  };

  render() {
    return (
      <ScreenWrapper>
        <Text>Home screen</Text>
        <Button title="Logout" onPress={this.logout} />
      </ScreenWrapper>
    );
  }
}

export default Home;
