import {StyleSheet} from "react-native";

export const EpisodeItemStyles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontSize: 16,
    color: 'white',
    fontWeight: "normal",
  },
  duration: {
    fontSize: 14,
    fontWeight: "normal",
    color: 'grey',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
  },
})