import React, {useState} from 'react';
import {View, Text} from "react-native";
import {PollStyles as styles} from "./Poll.styles";
import PollItem from "./PollItem/PollItem";
import Button from "../../../Button/Button";
import InputField from "../../../InputField/InputField";
import {useDispatch} from "react-redux";
import {getPollResult} from "../../../../modules/current-item/actions";
import isNil from 'lodash/isNil';

type PropsT = {
  id: string,
  question: string,
  options?: Array<string>,
  hasMultipleAnswers?: boolean;
  canInteract?: boolean;
  stats?: Array<number>;
  correct?: Array<number>;
}

const Poll: React.FC<PropsT> = ({
  id,
  question,
  options,
  hasMultipleAnswers,
  canInteract,
  stats,
  correct,
}) => {

  const [preparedOptions, setPreparedOptions] = useState(
    options?.map((option, index) => {
      return {
        index: index,
        selected: false,
        text: option
      }
    })
  )


  const dispatch = useDispatch();

  const handleSelect = (index: number) => {
      setPreparedOptions(prevState => {

        if (isNil(prevState)) {
          return null;
        }

        return prevState.map(option => {
          return {
            index: option.index,
            selected: index == option.index ? !option.selected : option.selected,
            text: option.text
          }}
        )


      })
  }

  const onSubmitPoll = () => {
    const answers = [];

    preparedOptions.forEach(option => {
      if (option.selected) {
        answers.push(option.index);
      }
    })
    console.log(answers);
    dispatch(getPollResult(id, answers));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ГОЛОСОВАНИЕ</Text>
      <Text style={styles.questionTitle}>{question}</Text>
      {
        preparedOptions
          &&
          preparedOptions.map((option) => {
            return (
              <PollItem
                text={option.text}
                key={option.index}
                index={option.index}
                selected={option.selected}
                multipleAnswers={hasMultipleAnswers ?? false}
                stat={stats ? stats[option.index] : 0}
                isCorrect={false}
                onSelect={handleSelect}
                canInteract={canInteract ?? false}
                canSelect={true}
              />
            )
          })
      }
      {
          canInteract && (
            <View style={styles.buttonContainer}>
              <Button title={"Отправить"} onPress={onSubmitPoll}/>
            </View>
          )
      }
    </View>
  )
}
export default Poll;