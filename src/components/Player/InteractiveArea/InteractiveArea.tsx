import React from 'react';
import {View} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Cover from "./Cover/Cover";
import Poll from "./Poll/Poll";
import ImageButton from "./ImageButton/ImageButton";
import TextArea from "./TextArea/TextArea";
import {useSelector} from "react-redux";
import {getItemsByKey} from "../../../modules/episode/selectors";


const InteractiveArea: React.FC = () => {



  const testImageUrl = '../../images/test-image.jpeg';
  return (
    <View style={styles.container}>
      <TextArea text={''}/>
    </View>
  );
}

export default InteractiveArea;