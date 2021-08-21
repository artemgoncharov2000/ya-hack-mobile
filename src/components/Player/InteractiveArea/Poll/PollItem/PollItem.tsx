import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {PollItemStyles as styles} from "./PollItem.styles";
import CheckBoxIcon from '../../../../../icons/check-box-icon.svg';
import CheckBoxSelectedIcon from '../../.././../../icons/check-box-selected-icon.svg';

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

const RadioButton: React.FC = () => {
  return (
    <TouchableOpacity>

    </TouchableOpacity>
  );
}

const PollItem: React.FC = () => {

  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.checkBoxContainer}>
        <CheckBox selected={selected}/>
      </View>
      <View>
        <Text style={styles.text}>PollItemText</Text>
      </View>
    </TouchableOpacity>
  )
};

export default PollItem;