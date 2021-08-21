import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';
import {View, Text} from "react-native";
import {ControlsStyles as styles} from "./Controls.styles";
import PlayButton from "../../PlayButton/PlayButton";
import Slider from "../../Slider/Slider";
import RewindButton from "../../RewindButton/RewindButton";

const Controls: React.FC = () => {

  return (
    <View style={styles.container}>
      <Slider/>
      <View style={styles.buttonsContainer}>
        <RewindButton isForward={false}/>
        <PlayButton/>
        <RewindButton isForward={true}/>
      </View>
    </View>
  );
}

export default Controls;