import React, {useState} from "react";
import {View, Text} from "react-native";
import {TextAreaStyles as styles} from "./TextArea.styles";
import InputField from "../../../InputField/InputField";
import Button from "../../../Button/Button";

type PropsT = {
  text: string;
  hasInputForm?: boolean;
}

const TextArea: React.FC<PropsT> = ({
  text,
  hasInputForm,
}) => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(!submitted)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{submitted ? 'Спасибо за ответ' : text}</Text>
      {
        hasInputForm && !submitted && (
          <>
            <InputField
              placeholder={'Ваш ответ'}
            />
            <View style={styles.buttonContainer}>
              <Button title={"Отправить"} onPress={handleSubmit}/>
            </View>
          </>

        )
      }
    </View>
  );
}

export default TextArea;