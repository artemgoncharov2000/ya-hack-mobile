import React from 'react';
import {TouchableOpacity, Text} from "react-native";
import {ButtonStyles as styles} from "./Button.styles";

type PropsT = {
  title: string,
  onPress: () => void,
}

const Button: React.FC<PropsT> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;