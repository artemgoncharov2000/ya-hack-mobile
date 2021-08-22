import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator} from "react-native";
import {ControlsStyles as styles} from "./Controls.styles";
import PlayButton from "../../PlayButton/PlayButton";
// import Slider from "../../Slider/Slider";
import RewindButton from "../../RewindButton/RewindButton";
import {Audio, AVPlaybackStatus} from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import Slider from '@react-native-community/slider';

const uri =  "file:///Users/artemgoncharov/Library/Developer/CoreSimulator/Devices/586D35AB-0332-42CE-B75E-287E6B5AC19E/data/Containers/Data/Application/99DD4F57-C1AE-4196-B18C-EB65376CCD03/Library/Caches/ExponentExperienceData/%2540artemgoncharov2000%252FYaHackMobile/ExponentAsset-a8498bd8aa4b8070ad0a07977277cafc.mp3"

const PlayControls = () => {
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const sound = React.useRef(new Audio.Sound());

  const UpdateStatus = async (data) => {
    try {
      if (data.didJustFinish) {
        ResetPlayer();
      } else if (data.positionMillis) {
        if (data.durationMillis) {
          setValue((data.positionMillis / data.durationMillis) * 100);
        }
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const ResetPlayer = async () => {
    try {
      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded) {
        setValue(0);
        setPlaying(false);
        await sound.current.setPositionAsync(0);
        await sound.current.stopAsync();
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (!result.isPlaying) {
          sound.current.playAsync();
          setPlaying(true);
        }
      }
    } catch (error) {
      setPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying) {
          sound.current.pauseAsync();
          setPlaying(false);
        }
      }
    } catch (error) {
      setPlaying(true);
    }
  };

  const SeekUpdate = async (data) => {
    try {

      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded) {
        const result = (data / 100) * duration;
        await sound.current.setPositionAsync(Math.round(result));
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const LoadAudio = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (!checkLoading.isLoaded) {
      try {
        const result = await sound.current.loadAsync(
          require('./test.mp3'),
          {},
          true
        );
        if (!result.isLoaded) {
          setLoading(false);
          setLoaded(false);
          console.log('Error in Loading Audio');
        } else {
          sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          setLoading(false);
          setLoaded(true);
          setDuration(result.durationMillis);
        }
      } catch (error) {
        setLoading(false);
        setLoaded(false);
      }
    } else {
      setLoading(false);
      setLoaded(true);
    }
  };

    return (
      <View style={styles.container}>
        {/*<Slider currentPos={Value} duration={Duration}/>*/}
        <Slider
          style={{ width: 365 }}
          minimumValue={0}
          maximumValue={100}
          value={value}
          onValueChange={(value) => {console.log(value)}}
          onSlidingComplete={(data) => SeekUpdate(data)}
          minimumTrackTintColor={'dodgerblue'}
        />
        <View style={styles.buttonsContainer}>
          <RewindButton isForward={false}/>
          {/*<PlayButton*/}
          {/*  onPressPlay={playSound}*/}
          {/*  onPressStop={stopSound}*/}
          {/*/>*/}
          {loading ? (
            <ActivityIndicator size={"small"} color={"red"}/>
          )
          : !loaded ?
              <Button title={"Load"} onPress={LoadAudio}/>
              :
              <Button title={"Play"} onPress={playing ? PauseAudio : PlayAudio}/>
          }

          <RewindButton isForward={true}/>
        </View>
      </View>
    );

}

export default PlayControls;