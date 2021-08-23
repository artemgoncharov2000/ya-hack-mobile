import {StyleSheet} from "react-native";

export const EpisodeItemStyles = StyleSheet.create({
  container: {
    height: 60,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    backgroundColor: '#493673',
  },
  titleContainer: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 18,
    color: 'white',
    fontWeight: "bold",
  },
  durationContainer: {
    fontSize: 14,
    fontWeight: "bold",
    color: 'grey',
    paddingHorizontal: 5,
  },
})