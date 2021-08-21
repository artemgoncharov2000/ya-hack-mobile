import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {View, Text} from "react-native";
import {ControlsStyles as styles} from "./Controls.styles";
import PlayButton from "../../PlayButton/PlayButton";
import Slider from "../../Slider/Slider";
import RewindButton from "../../RewindButton/RewindButton";
import {Audio, AVPlaybackStatus} from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';

const Controls: React.FC = () => {

  const sound = new Audio.Sound();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  const loadSound = async () => {
    // Audio.Sound.createAsync(
    //   require('./test.mp3'),
    // )
    //   .then(({sound}) => setSound(sound))
    try {
      await sound.loadAsync(require('./test.mp3'));
      const status = await sound.getStatusAsync();
      setStatus(status);
    } catch (error) {
      console.log(error)
    }
  }

  const playSound = async () => {

    if (!sound) {
      return;
    }

    const status = await sound.getStatusAsync()
    console.log(status);
    await sound.playAsync();
  }

  const stopSound = async () => {

    if (!sound) {
      return;
    }

    await sound.stopAsync();
  }

  React.useEffect(() => {
    loadSound();
    return sound
      ? () => {
        sound.unloadAsync(); }
      : undefined;
  }, [sound, loadSound]);

  return (
    <View style={styles.container}>
      <Slider currentPos={status.positionMillis} duration={status.durationMillis}/>
      <View style={styles.buttonsContainer}>
        <RewindButton isForward={false}/>
        <PlayButton
          onPressPlay={playSound}
          onPressStop={stopSound}
        />
        <RewindButton isForward={true}/>
      </View>
    </View>
  );
}

export default Controls;