import React from "react";
import {Image, View} from "react-native";
import {ImageButtonStyles as styles} from "./ImageButton.styles";
import Button from "../../../Button/Button";

type PropsT = {
  imageUrl: string,
  hasButton: boolean,
  hasImage: boolean,
};

const ImageButton: React.FC<PropsT> = ({
  hasButton,
  hasImage,
}) => {
  return (
    <View style={styles.container}>
      {
        hasImage && (
          <Image style={styles.imageContainer} source={{uri: 'https://pbs.twimg.com/profile_images/984521325820522496/MHro8JD5.jpg'}}/>
        )
      }
      {
        hasButton && (
          <View style={styles.buttonContainer}>
            <Button title={"Купить сейчас"} onPress={() => {}}/>
          </View>
        )
      }
    </View>
  );
};

export default ImageButton;