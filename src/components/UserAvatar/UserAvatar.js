import React from "react";
import { Avatar } from "./UserAvatar.styles";

const UserAvatar = props => (
  <Avatar source={{ uri: props.photo }} resizeMode="contain" />
);
export default UserAvatar;
