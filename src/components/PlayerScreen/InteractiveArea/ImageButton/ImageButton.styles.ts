import {StyleSheet} from "react-native";

export const ImageButtonStyles = StyleSheet.create({
  container: {
    width: 365,
    height: 365,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 15,
  },
  image: {
    width: 220,
    height: 220,
  },
  buttonContainer: {
    marginTop: 15,
  },
})