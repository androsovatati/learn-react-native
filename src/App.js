import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Home from "./screens/Home";
import Login from "./screens/Login";

const HomeStack = createStackNavigator({ Home });
const LoginStack = createStackNavigator({ Login });

const MainNavigator = createSwitchNavigator(
  {
    HomeStack,
    LoginStack
  },
  {
    initialRouteName: "LoginStack"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
