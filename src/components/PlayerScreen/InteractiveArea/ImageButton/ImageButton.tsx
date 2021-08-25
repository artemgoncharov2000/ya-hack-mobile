import React from "react";
import {Image, Linking, View} from "react-native";
import {ImageButtonStyles as styles} from "./ImageButton.styles";
import Button from "../../../Button/Button";
import isNil from 'lodash/isNil';

type PropsT = {
  imageUrl?: string,
  buttonText?: string,
  buttonUrl?: string,
};

const ImageButton: React.FC<PropsT> = ({
  imageUrl,
  buttonText,
  buttonUrl,
}) => {

  const handlePress = async () => {

    if (isNil(buttonUrl)) {
      return;
    }

    const canOpen = await Linking.canOpenURL(buttonUrl);

    if (canOpen) {
      await Linking.openURL(buttonUrl);
    }
  }

  return (
    <View style={styles.container}>
      {
        imageUrl && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
          </View>
        )
      }
      {
        buttonText && (
          <View style={styles.buttonContainer}>
            <Button title={buttonText} onPress={handlePress}/>
          </View>
        )
      }
    </View>
  );
}

export default ImageButton;