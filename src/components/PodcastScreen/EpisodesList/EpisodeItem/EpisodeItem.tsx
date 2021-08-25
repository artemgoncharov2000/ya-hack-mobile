import React from 'react';
import {EpisodeItemStyles as styles} from "./EpisodeItem.styles";
import {TouchableOpacity, Text, View} from "react-native";
import OptionsButtonIcon from '../../../../icons/options-button-icon.svg';
import {useDispatch} from "react-redux";
import {setEpisodeGuid} from "../../../../modules/episode/actions";
import {durationToHumanTime} from "../../../../lib/time-tools/time-tools";

type PropsT = {
  title: string;
  duration: number;
  onPress: () => void;
  guid: string;
}

const EpisodeItem: React.FC<PropsT> = ({
  title,
  duration,
  onPress,
  guid,
}) => {

  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setEpisodeGuid(guid));
    onPress();
  }

  const time = durationToHumanTime(duration);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>{time}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <OptionsButtonIcon/>
      </View>
    </TouchableOpacity>
  )
}

export default EpisodeItem;