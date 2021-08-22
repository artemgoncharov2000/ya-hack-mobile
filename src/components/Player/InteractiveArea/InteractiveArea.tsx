import React from 'react';
import {View} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Cover from "./Cover/Cover";
import Poll from "./Poll/Poll";
import ImageButton from "./ImageButton/ImageButton";
import TextArea from "./TextArea/TextArea";


const InteractiveArea: React.FC = () => {

  const PollMock = {
    question: "Какая удаленка лучше всего подходит для удаления?",
    options: [
      'Рязань',
      'На Бали',
      'Старбакс на Савеловской',
      'В рязанской области',
    ],
  }

  const text = "Термин — слово или словосочетание, являющееся названием определённого понятия какой-н. специальной области науки, техники, искусства";

  const testImageUrl = '../../images/test-image.jpeg';
  return (
    <View style={styles.container}>
      <TextArea text={text}/>
    </View>
  );
}

export default InteractiveArea;