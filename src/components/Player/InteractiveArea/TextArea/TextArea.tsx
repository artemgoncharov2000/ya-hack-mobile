import React from "react";
import {View, Text} from "react-native";
import {TextAreaStyles as styles} from "./TextArea.styles";

type PropsT = {
  text: string;
}

const TextArea: React.FC<PropsT> = ({
  text,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default TextArea;