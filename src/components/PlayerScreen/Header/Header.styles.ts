import {StyleSheet} from "react-native";

export const HeaderStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexGrow: 0.5,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backButtonContainer: {
    paddingHorizontal: 30,
  },
  centerContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
  },
  trackName: {
    color: 'white',
    fontSize: 14,
  },
});