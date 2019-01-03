import React, { Component } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import FormWrapper from "../../components/FormWrapper";
import Button from "../../components/Button";
import UserAvatar from "../../components/UserAvatar";
import FormTitle from "../../components/FormTitle";
import FormField from "../../components/FormField";
import { LARGE } from "../../components/FormField/FormField.styles";
import Store from "../../store";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Home extends Component {
  static navigationOptions = {
    header: null
  };

  @observable showForm = false;

  componentDidMount() {
    this.showForm = true;
  }

  logout = () => {
    this.showForm = false;
  };

  onPoseComplete = pose => {
    if (pose === "hidden") {
      this.props.navigation.navigate("LoginStack");
    }
  };

  render() {
    return (
      <ScreenWrapper>
        <FormWrapper
          onPoseComplete={this.onPoseComplete}
          pose={this.showForm ? "visible" : "hidden"}
        >
          <UserAvatar photo={Store.user.photoUrl} />
          <FormField>
            <FormTitle>{Store.user.name}</FormTitle>
          </FormField>
          <FormField marginSize={LARGE}>
            <Button text="Logout" onPress={this.logout} />
          </FormField>
        </FormWrapper>
      </ScreenWrapper>
    );
  }
}

export default Home;
