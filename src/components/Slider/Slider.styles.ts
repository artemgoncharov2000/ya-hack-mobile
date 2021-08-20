import {StyleSheet} from "react-native";

export const SliderStyles = StyleSheet.create({
  sliderContainer: {
    height: 20,
  },
  track: {
    backgroundColor: 'white',
  },
  pressedMarker: {
    width: 20,
    height: 20,
    borderRadius: 90,
    backgroundColor: 'white',
  },
  marker: {
    width: 6,
    height: 6,
    borderRadius: 90,
    backgroundColor: 'white',
  },
  selected: {
    backgroundColor: 'white',
  },
  timeStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    color: 'white',
  }
})