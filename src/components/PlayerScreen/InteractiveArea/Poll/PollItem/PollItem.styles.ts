import {StyleSheet} from "react-native";

export const PollItemStyles = StyleSheet.create({
  containerInteract: {
    height: 50,
    backgroundColor: 'rgba(127, 114, 157, 0.85)',
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
  },
  containerNotInteract: {
    height: 50,
    backgroundColor: 'rgba(127, 114, 157, 0.85)',
    borderRadius: 7,
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row",
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
});