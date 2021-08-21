import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {PollItemStyles as styles} from "./PollItem.styles";
import CheckBoxIcon from '../../../../../icons/check-box-icon.svg';
import CheckBoxSelectedIcon from '../../.././../../icons/check-box-selected-icon.svg';
import RadioButtonIcon from '../../../../../icons/radio-button-icon.svg';
import RadioButtonSelectedIcon from '../../../../../icons/radio-button-selected-icon.svg';


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
          <RadioButtonIcon/>
          :
          <RadioButtonSelectedIcon/>
      }
    </TouchableOpacity>
  );
}

type PollItemPropsT = {
  text: string;
  multipleAnswers: boolean;
}

const PollItem: React.FC<PollItemPropsT> = ({
  text,
  multipleAnswers,
}) => {

  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
  )
};

export default PollItem;