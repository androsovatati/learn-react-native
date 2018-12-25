import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Home extends Component {
  logout = () => {
    this.props.navigation.navigate("LoginStack");
  };

  render() {
    return (
      <View>
        <Text>Home screen</Text>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}

export default Home;
