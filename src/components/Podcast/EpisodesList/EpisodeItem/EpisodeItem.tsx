import React from 'react';
import {EpisodeItemStyles as styles} from "./EpisodeItem.styles";
import {TouchableOpacity, Text} from "react-native";

type PropsT = {
  title: string;
  duration: number;
}

const EpisodeItem: React.FC<PropsT> = ({
  title,
  duration
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleContainer}>{title}</Text>
      <Text style={styles.durationContainer}>{duration}</Text>
    </TouchableOpacity>
  )
}

export default EpisodeItem;