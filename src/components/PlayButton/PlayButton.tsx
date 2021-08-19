import React, {useState} from "react";
import { View } from "react-native";
import {TouchableOpacity} from "react-native";
// @ts-ignore
import PlayIcon from '../../icons/play-button-icon.svg';
import PauseIcon from '../../icons/play-button-icon.svg';

const PlayButton: React.FC = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handleTouch = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <View>
      <TouchableOpacity  onPress={handleTouch}>
        {/*{*/}
        {/*  isPlaying*/}
        {/*    ?*/}
            <PauseIcon height={64} width={64} />
        {/*    :*/}
        {/*    <PlayIcon />*/}
        {/*}*/}
      </TouchableOpacity>
    </View>

  )
}

export default PlayButton;