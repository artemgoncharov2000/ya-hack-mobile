import React from 'react';
import {ImageBackground, Image, View} from 'react-native';
import {ItemStyles as styles} from "./Item.styles";

type PropsT = {
  backGroundImageUrl?: string;
}

const Item: React.FC<PropsT> = ({
  backGroundImageUrl
}) => {

  const image = {uri: 'https://avatars.yandex.net/get-music-content/103235/6856d850.a.6407298-11/m1000x1000'};

  return (
    <View style={styles.container}>
      {
        <Image style={styles.imageContainer} source={image}/>
      }
    </View>
  );
};

export default Item;