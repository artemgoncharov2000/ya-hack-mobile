import React from 'react';
import { Text, View} from "react-native";
import {PodcastInfoStyles as styles} from "./PodcastInfo.styles";
import Cover, {ImageSize} from "../../Player/InteractiveArea/Cover/Cover";
import Button from '../../Button/Button';

const PodcastInfo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Cover imageSize={ImageSize.MEDIUM} backgroundImageUrl={'https://upload.wikimedia.org/wikipedia/ru/8/88/30STM_—_This_Is_War.jpg'}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Трасса 161</Text>
      </View>
      <View>
        <Text style={styles.description}>В третьем сезоне - история похищенного в Нижнем тагиле подростка</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Button title={'Перемешать'} onPress={() => {}}/>
      </View>
    </View>
  );
}

export default PodcastInfo;