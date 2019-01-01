import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import FormField from "../../components/FormField";
import { MEDIUM, LARGE } from "../../components/FormField/FormField.styles";
import FormTitle from "../../components/FormTitle";
import ErrorAlert from "../../components/ErrorAlert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Store from "../../store";
import isValidEmail from "../../utils/isValidEmail";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class Login extends Component {
  static navigationOptions = {
    header: null
  };

  @observable email = "";
  @observable password = "";
  @observable errorMessage = "";
  @observable isLoading = false;
  @observable showForm = false;

  @computed
  get isEmailError() {
    return !isValidEmail(this.email);
  }

  @computed
  get isPasswordError() {
    return !this.isEmailError && this.password.length < 4;
  }

  componentDidMount() {
    this.showForm = true;
  }

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
    if (this.isEmailError) {
      this.errorMessage = "Invalid email";
    } else if (this.isPasswordError) {
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
    this.showForm = false;
  };

  onPoseComplete = pose => {
    if (pose === "hidden") {
      this.props.navigation.navigate("HomeStack");
    }
  };

  render() {
    return (
      <ScreenWrapper>
        <FormWrapper
          onPoseComplete={this.onPoseComplete}
          pose={this.showForm ? "visible" : "hidden"}
        >
          <FormTitle>Log in</FormTitle>
          <FormField marginSize={MEDIUM}>
            <Input
              textContentType={"emailAddress"}
              keyboardType={"email-address"}
              placeholder={"E-mail"}
              isError={this.errorMessage && this.isEmailError}
              value={this.email}
              onChangeText={this.onEmailChange}
            />
          </FormField>
          <FormField>
            <Input
              textContentType={"password"}
              secureTextEntry={true}
              placeholder={"Password"}
              isError={this.errorMessage && this.isPasswordError}
              value={this.password}
              onChangeText={this.onPasswordChange}
            />
          </FormField>
          {!!this.errorMessage && (
            <FormField>
              <ErrorAlert>{this.errorMessage}</ErrorAlert>
            </FormField>
          )}
          <FormField marginSize={LARGE}>
            <Button
              text="Login"
              isLoading={this.isLoading}
              onPress={this.login}
            />
          </FormField>
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Login;
