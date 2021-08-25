import React, {useEffect} from "react";
import {ActivityIndicator, Animated, View} from "react-native";
import {LoadScreenStyles as styles} from "./LoadScreen.styles";
import YaLogoIcon from '../../icons/ya-logo-icon.svg';
import {useDispatch} from "react-redux";
import {loadPodcast} from "../../modules/podcast/actions";

export const TEST_PODCAST_ID = 'UuZX5gFuThygPQw5B5ZVDA';

const LoadScreen: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    let delayInMilliseconds = 3000;

    setTimeout(function() {
      dispatch(loadPodcast(TEST_PODCAST_ID))
    }, delayInMilliseconds);
  }, []);

  return (
    <View style={styles.container}>
      <YaLogoIcon/>
      <ActivityIndicator size={"small"} color={"white"}/>
    </View>
  )
}

export default LoadScreen;