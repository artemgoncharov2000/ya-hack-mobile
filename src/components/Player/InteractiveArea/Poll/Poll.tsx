import React from 'react';
import {View, Text} from "react-native";
import {PollStyles as styles} from "./Poll.styles";
import PollItem from "./PollItem/PollItem";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";

type PropsT = {
  question: string,
  options: Array<string>,
  hasMultipleAnswers?: boolean;
  hasTextAnswer?: boolean,
}

const Poll: React.FC<PropsT> = ({
  question,
  options,
  hasMultipleAnswers,
  hasTextAnswer,
}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ГОЛОСОВАНИЕ</Text>
      <Text style={styles.questionTitle}>{question}</Text>
      {
        hasTextAnswer
          ?
          <InputField
            placeholder={'Ваш ответ'}
          />
          :
          options.map((option, index) => {
            return (
              <PollItem
                text={option}
                key={index}
                multipleAnswers={hasMultipleAnswers ?? false}
              />
            )
          })

      }
      <View style={styles.buttonContainer}>
        <Button title={"Отправить"} onPress={() => {}}/>
      </View>
    </View>
  )
}
export default Poll;