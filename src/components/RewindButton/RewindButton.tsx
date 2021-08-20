import React, {useState} from "react";
import { View } from "react-native";
import {TouchableOpacity} from "react-native";
import BackwardIcon from '../../icons/backward-button-svg.svg';
import ForwardIcon from '../../icons/forward-button-icon.svg';

type PropsT = {
  isForward: boolean;
};

const RewindButton: React.FC<PropsT> = ({isForward}) => {

  // const [isPlaying, setIsPlaying] = useState(false);
  //
  // const handleTouch = () => {
  //   setIsPlaying(!isPlaying);
  // }

  return (
    <View>
      <TouchableOpacity>
        {
          isForward
            ?
            <ForwardIcon />
            :
            <BackwardIcon />
        }
      </TouchableOpacity>
    </View>

  )
}

export default RewindButton;