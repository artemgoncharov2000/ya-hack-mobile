import React from 'react';
import {View, Text} from "react-native";
import {PollStyles as styles} from "./Poll.styles";
import PollItem from "./PollItem/PollItem";

const Poll: React.FC = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ГОЛОСОВАНИЕ</Text>
      <Text style={styles.questionTitle}>{"Какая удаленка лучше всего подходит для удаления?"}</Text>
      <PollItem/>
      <PollItem/>
      <PollItem/>
      <PollItem/>
    </View>
  )
}
export default Poll;