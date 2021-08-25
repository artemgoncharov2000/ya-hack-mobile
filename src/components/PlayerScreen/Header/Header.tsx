import React from 'react';
import {View, Text} from "react-native";
import { HeaderStyles as styles } from './Header.styles';
import BackButton from "../../BackButton/BackButton";

type PropsT = {
  title: string;
  navigation: any;
};

const Header: React.FC<PropsT> = ({
  title,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton navigation={navigation}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>{'Сейчас играет'}</Text>
        <Text style={styles.trackName}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
      </View>
    </View>
  );
};

export default Header;