import React from 'react';
import {View} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Item from "./Item/Item";


const InteractiveArea: React.FC = () => {

  const testImageUrl = '../../images/test-image.jpeg';
  return (
    <View style={styles.container}>
      <Item backGroundImageUrl={testImageUrl}/>
    </View>
  );
}

export default InteractiveArea;