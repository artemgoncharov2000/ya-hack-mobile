import React from 'react';
import {View} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Item from "./Item/Item";
import Poll from "./Poll/Poll";


const InteractiveArea: React.FC = () => {

  const testImageUrl = '../../images/test-image.jpeg';
  return (
    <View style={styles.container}>
      <Poll/>
    </View>
  );
}

export default InteractiveArea;