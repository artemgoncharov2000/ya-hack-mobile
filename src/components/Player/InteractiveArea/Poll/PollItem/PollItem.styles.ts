import {StyleSheet} from "react-native";

export const PollItemStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 7,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: "row",
  },
  textContainer: {

  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  checkBoxContainer: {
    paddingLeft: 15,
    paddingRight: 8,
  },
  checkBox: {
    width: 16,
    height: 16,
  }
});