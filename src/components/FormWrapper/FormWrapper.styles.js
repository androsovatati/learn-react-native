import styled from "styled-components";
import posed from "react-native-pose";
import { Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const transition = { duration: 300, ease: "easeInOut" };

const PosedWrapper = posed.View({
  visible: {
    y: 0,
    opacity: 1,
    transition
  },
  hidden: {
    y: SCREEN_HEIGHT,
    opacity: 0,
    transition
  }
});

export const Wrapper = styled(PosedWrapper)`
  align-self: stretch;
  margin: 37px 16px;
  padding: 32px 24px 48px 24px;
  border-radius: 8px;
  background-color: white;

  ${{ elevation: 2 }};
`;
