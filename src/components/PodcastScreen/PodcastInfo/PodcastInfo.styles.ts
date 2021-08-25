import {StyleSheet} from "react-native";

export const PodcastInfoStyles = StyleSheet.create({
  container: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: 'white',
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
  buttonContainer: {
    paddingTop: 30,
  },
});