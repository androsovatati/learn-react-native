import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import FormField from "../../components/FormField";
import FormTitle from "../../components/FormTitle";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Text } from "react-native";
import Store from "../../store";
import isValidEmail from "../../utils/isValidEmail";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Login extends Component {
  static navigationOptions = {
    header: null
  };

  @observable email = "";
  @observable password = "";
  @observable errorMessage = "";
  @observable isLoading = false;

  onEmailChange = value => {
    this.resetErrorMessage();
    this.email = value;
  };

  onPasswordChange = value => {
    this.resetErrorMessage();
    this.password = value;
  };

  resetErrorMessage() {
    this.errorMessage = "";
  }

  validateForm() {
    if (!isValidEmail(this.email)) {
      this.errorMessage = "Invalid email";
    } else if (this.password.length < 4) {
      this.errorMessage = "Enter password";
    }
  }

  login = async () => {
    this.validateForm();
    if (this.errorMessage) {
      return;
    }

    this.isLoading = true;
    const response = await Store.login({
      email: this.email,
      password: this.password
    });
    this.isLoading = false;

    if (response.error) {
      this.password = "";
      this.errorMessage = response.error.message;
      return;
    }

    this.props.navigation.navigate("HomeStack");
  };

  render() {
    return (
      <ScreenWrapper>
        <FormWrapper>
          <FormTitle>Log in</FormTitle>
          <FormField>
            <Input
              textContentType={"emailAddress"}
              keyboardType={"email-address"}
              onChangeText={this.onEmailChange}
            />
          </FormField>
          <FormField>
            <Input
              textContentType={"password"}
              secureTextEntry={true}
              onChangeText={this.onPasswordChange}
            />
          </FormField>
          {!!this.errorMessage && (
            <FormField>
              <Text>{this.errorMessage}</Text>
            </FormField>
          )}
          <FormField>
            <Button text="Login" onPress={this.login} />
          </FormField>
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Login;
