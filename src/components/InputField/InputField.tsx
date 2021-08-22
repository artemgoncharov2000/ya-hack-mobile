import React, {useState} from "react";
import {View, TextInput as Input} from "react-native";
import {InputFieldStyles as styles} from "./InputField.style";

type PropsT = {
  placeholder?: string,
}

const TextInput: React.FC<PropsT> = ({
  placeholder,
}) => {

  const [value, setValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <Input placeholder={placeholder} value={value} onChangeText={(value) => setValue(value)}/>
    </View>
  );
};

export default TextInput;