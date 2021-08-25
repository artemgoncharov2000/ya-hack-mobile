import React from "react";
import BackButtonIcon from '../../icons/back-button-icon.svg';
import {TouchableOpacity} from "react-native";

type PropsT = {
  navigation: any;
}
const BackButton: React.FC<PropsT> = ({navigation}) => {

  const handlePress = () => {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <BackButtonIcon/>
    </TouchableOpacity>
  )
}

export default BackButton;