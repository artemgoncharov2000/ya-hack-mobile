import React, {useEffect} from 'react';
import {ImageBackground, View, Image} from "react-native";
import {InteractiveAreaStyles as styles} from "./InteractiveAreaStyles";
import Cover, {ImageSize} from "./Cover/Cover";
import ImageButton from "./ImageButton/ImageButton";
import TextArea from "./TextArea/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentItem} from "../../../modules/current-item/selectors";
import {EpisodeItemT} from "../../../modules/episode/model";
import {ItemEnum} from "../../../modules/current-item/model";
import Poll from "./Poll/Poll";
import {setCurrentItem} from "../../../modules/current-item/actions";

type PropsT = {
  defaultImageUrl: string;
}
const InteractiveArea: React.FC<PropsT> = ({
  defaultImageUrl,
}) => {
  const dispatch = useDispatch();
  const currentItem = useSelector(selectCurrentItem);

  const getItemComponent = (item: EpisodeItemT) => {

    if (!item) {
      return;
    }

      switch (item.type) {
        case ItemEnum.IMAGE_BUTTON:
          return (
            <ImageButton imageUrl={item.imageUrl} buttonText={item.buttonText} buttonUrl={item.buttonUrl}/>
          )
        case ItemEnum.TEXT:
          return (
            <TextArea text={item.text ?? ''} hasInputForm={item.hasInputForm ?? false}/>
          )
        case ItemEnum.FORM:
          return (
            <Poll id={item.id} question={item.question ?? ''} />
          )
        case ItemEnum.POLL:
          return (
            <Poll id={item.id} question={item.question ?? ''} options={item.options} hasMultipleAnswers={item.multipleOptions} canInteract={item.canInteract} stats={item.stats}/>
          )
        default:
          return (
            <></>
          )
      }
  }

  useEffect(() => {
    return () => {
      dispatch(setCurrentItem(null));
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: defaultImageUrl}} style={{height: 365, width: 365,}} imageStyle={{opacity: currentItem ? 0.1 : 1}}>
        {/*<View style={styles.itemContainer}>*/}
          {
            currentItem && (
              getItemComponent(currentItem)
            )
          }
        {/*</View>*/}
      </ImageBackground>
    </View>
  );
}

export default InteractiveArea;