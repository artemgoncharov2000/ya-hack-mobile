import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import PlayIcon from '../../icons/play-icon.svg';
import {ShuffleButtonStyles as styles} from "./ShuffleButton.styles";

type PropsT = {
  onPress: () => void;
}

const ShuffleButton: React.FC<PropsT> = ({
  onPress,
}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PlayIcon/>
      <Text style={styles.text}>Перемешать</Text>
    </TouchableOpacity>
  );
}

export default ShuffleButton;