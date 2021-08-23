import {StyleSheet} from "react-native";

export const PodcastInfoStyles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: 'white',
  },
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  description: {
    fontSize: 14,
    color: 'grey',
  },
});