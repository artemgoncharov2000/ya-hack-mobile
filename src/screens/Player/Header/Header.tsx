import React from 'react';
import {View, Text} from "react-native";
import { HeaderStyles as styles } from './Header.styles';

type PropsT = {
  title: string;
};

const Header: React.FC<PropsT> = ({
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Сейчас играет'}</Text>
      <Text style={styles.trackName}>{title}</Text>
    </View>
  );
};

export default Header;