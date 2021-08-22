import React, {useState} from "react";
import {View} from "react-native";
import {TouchableOpacity} from "react-native";
import BackwardIcon from '../../icons/backward-button-svg.svg';
import ForwardIcon from '../../icons/forward-button-icon.svg';

type PropsT = {
  isForward: boolean;
  onPress: () => void;
};

const RewindButton: React.FC<PropsT> = ({isForward, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress}>
      {
        isForward
          ?
          <ForwardIcon/>
          :
          <BackwardIcon/>
      }
    </TouchableOpacity>
  )
}

export default RewindButton;