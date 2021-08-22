import React, {useState} from "react";
import { View } from "react-native";
import {TouchableOpacity} from "react-native";
import PlayIcon from '../../icons/play-button-icon.svg';
import PauseIcon from '../../icons/pause-button-icon.svg';

type PropsT = {
  playing: boolean;
  onPress: () => {}
};

const PlayButton: React.FC<PropsT> = ({
  playing,
  onPress,
}) => {

  const handlePress = () => {
    onPress();
  }

  return (
    <View>
      <TouchableOpacity  onPress={handlePress}>
        {
          playing
            ?
            <PauseIcon />
            :
            <PlayIcon />
        }
      </TouchableOpacity>
    </View>

  )
}

export default PlayButton;