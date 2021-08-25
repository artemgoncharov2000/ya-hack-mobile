import React from 'react';
import {ImageBackground, Image, View} from 'react-native';
import {CoverStyles as styles} from "./CoverStyles";

export const enum ImageSize {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

type PropsT = {
  backgroundImageUrl?: string;
  imageSize: ImageSize;
}

const Cover: React.FC<PropsT> = ({
  backgroundImageUrl,
  imageSize,
}) => {

  console.log('rendered');
  console.log('backgroundImageUrl: ', backgroundImageUrl);
  const image = {uri: backgroundImageUrl};
  let size;

  switch (imageSize) {
    case ImageSize.LARGE:
      size = styles.imageContainerLarge;
      break;
    case ImageSize.MEDIUM:
      size = styles.imageContainerMedium;
      break;
    default:
      size = styles.imageContainerLarge;
      break;
  }

  return (
    <Image
      style={size} source={image}
    />
  );
}

export default Cover;