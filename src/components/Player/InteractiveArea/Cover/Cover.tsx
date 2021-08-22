import React from 'react';
import {ImageBackground, Image, View} from 'react-native';
import {CoverStyles as styles} from "./CoverStyles";

type PropsT = {
  backGroundImageUrl?: string;
}

const Cover: React.FC<PropsT> = ({
  backGroundImageUrl
}) => {

  const image = {uri: backGroundImageUrl};

  return (
    <View style={styles.container}>
      {
        <Image style={styles.imageContainer} source={image}/>
      }
    </View>
  );
};

export default Cover;