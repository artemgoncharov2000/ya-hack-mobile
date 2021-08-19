import React, {useState} from 'react';
import {ScrollView, SliderComponent, View} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {PlayerStyles} from "./Player.styles";
import PlayButton from "../../components/PlayButton/PlayButton";

const Player: React.FC = () => {

  return (
    <View style={PlayerStyles.Player}>
      <MultiSlider
      />
      <PlayButton/>
    </View>
  )
}

export default Player;