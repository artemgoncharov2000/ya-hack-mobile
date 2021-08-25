import React from 'react';
import {View, Text} from "react-native";
import {SongInfoStyles as styles} from "./SongInfo.styles";

type PropsT = {
  title: string,
  subtitle: string,
};

const SongInfo: React.FC<PropsT> = ({
  title,
  subtitle,
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.trackName}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default SongInfo;