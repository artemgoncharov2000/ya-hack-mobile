import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {PollItemStyles as styles} from "./PollItem.styles";
import CheckBoxIcon from '../../../../../icons/check-box-icon.svg';
import CheckBoxSelectedIcon from '../../.././../../icons/check-box-selected-icon.svg';
import RadioButtonIcon from '../../../../../icons/radio-button-icon.svg';
import RadioButtonSelectedIcon from '../../../../../icons/radio-button-selected-icon.svg';
import CorrectAnswerIcon from '../../../../../icons/correct-answer-button.svg';

type CheckBoxPropsT = {
  selected: boolean;
};

const CheckBox: React.FC<CheckBoxPropsT> = ({
  selected,
}) => {

  return (
    <View style={styles.checkBox}>
      {
        selected
          ?
          <CheckBoxSelectedIcon/>
          :
          <CheckBoxIcon/>
      }
    </View>
  );
};

type RadioButtonPropsT = {
  selected: boolean;
};

const RadioButton: React.FC<RadioButtonPropsT> = ({
  selected,
}) => {
  return (
    <TouchableOpacity>
      {
        selected
          ?
          <RadioButtonSelectedIcon/>
          :
          <RadioButtonIcon/>
      }
    </TouchableOpacity>
  );
}

type PollItemPropsT = {
  text: string;
  index: number;
  selected: boolean;
  multipleAnswers: boolean;
  canSelect: boolean;
  canInteract: boolean;
  stat?: number;
  isCorrect?: boolean;
  onSelect: (index: number) => void;
}

const PollItem: React.FC<PollItemPropsT> = ({
  text,
  index,
  selected,
  canSelect,
  multipleAnswers,
  canInteract,
  stat,
  isCorrect,
  onSelect,
}) => {
  const handlePress = () => {
    onSelect(index);
  };

  return (
    <>
      {
        canInteract
        ?
        <TouchableOpacity style={styles.containerInteract} onPress={canSelect ? handlePress : () => {}}>
          <View style={styles.checkBoxContainer}>
            {
              multipleAnswers
                ?
                <CheckBox selected={selected}/>
                :
                <RadioButton selected={selected}/>
            }
          </View>
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </TouchableOpacity>
        :
        <View style={styles.containerNotInteract}>
          <View style={{
            backgroundColor: isCorrect ? 'rgba(255, 255, 255, 0.45)' : 'rgba(162, 155, 181, 0.6)',
            position: "absolute",
            height: 50,
            width: stat ? stat * 365 / 100 : 0,
          }}>

          </View>
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
          {
            isCorrect && (
              <View>
                <CorrectAnswerIcon/>
              </View>
            )
          }
        </View>
      }
    </>
  )
}

export default PollItem;