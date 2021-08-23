import React from 'react';
import {View} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Cover from "./Cover/Cover";
import ImageButton from "./ImageButton/ImageButton";
import TextArea from "./TextArea/TextArea";
import {useSelector} from "react-redux";
import {selectCurrentItem} from "../../../modules/current-item/selectors";
import {EpisodeItemT} from "../../../modules/episode/model";
import {ItemEnum} from "../../../modules/current-item/model";
import Poll from "./Poll/Poll";

type PropsT = {
  defaultImageUrl: string;
}
const InteractiveArea: React.FC<PropsT> = ({
  defaultImageUrl,
}) => {

  const currentItem = useSelector(selectCurrentItem);

  const getItemComponent = (item: EpisodeItemT) => {
      switch (item.type) {
        case ItemEnum.IMAGE_BUTTON:
          return (
            <ImageButton imageUrl={item.imageUrl} buttonText={item.buttonText} buttonUrl={item.buttonUrl}/>
          )
        case ItemEnum.TEXT:
          return (
            <TextArea text={item.text ?? ''}/>
          )
        case ItemEnum.FORM:
          return (
            <Poll question={item.question ?? ''} />
          )
        case ItemEnum.POLL:
          return (
            <Poll question={item.question ?? ''} options={item.options} hasMultipleAnswers={item.multipleOptions}/>
          )
      }
  }


  return (
    <View style={styles.container}>
      {
        currentItem
        ?
          getItemComponent(currentItem)
        :
          <Cover backgroundImageUrl={defaultImageUrl}/>
      }
    </View>
  );
}

export default InteractiveArea;