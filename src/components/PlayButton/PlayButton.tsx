import React, {useState} from "react";
import { View } from "react-native";
import {TouchableOpacity} from "react-native";
import PlayIcon from '../../icons/play-button-icon.svg';
import PauseIcon from '../../icons/pause-button-icon.svg';

type PropsT = {
  onPressPlay: () => {};
  onPressStop: () => {};
};

const PlayButton: React.FC<PropsT> = ({
  onPressPlay,
  onPressStop,
}) => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      onPressStop();
    } else {
      onPressPlay();
    }
  }

  return (
    <View>
      <TouchableOpacity  onPress={handlePress}>
        {
          isPlaying
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