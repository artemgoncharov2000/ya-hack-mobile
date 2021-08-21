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

const Controls = () => {
  const [Loaded, SetLoaded] = React.useState(false);
  const [Loading, SetLoading] = React.useState(false);
  const [Playing, SetPlaying] = React.useState(false);
  const [Duration, SetDuration] = React.useState(0);
  const [Value, SetValue] = React.useState(0);
  const sound = React.useRef(new Audio.Sound());

  const UpdateStatus = async (data) => {
    try {
      if (data.didJustFinish) {
        ResetPlayer();
      } else if (data.positionMillis) {
        if (data.durationMillis) {
          SetValue((data.positionMillis / data.durationMillis) * 100);
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
        SetValue(0);
        SetPlaying(false);
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
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying) {
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };

  const SeekUpdate = async (data) => {
    try {

      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded) {
        const result = (data / 100) * Duration;
        await sound.current.setPositionAsync(Math.round(result));
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const LoadAudio = async () => {
    SetLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (!checkLoading.isLoaded) {
      try {
        const result = await sound.current.loadAsync(
          require('./test.mp3'),
          {},
          true
        );
        if (!result.isLoaded) {
          SetLoading(false);
          SetLoaded(false);
          console.log('Error in Loading Audio');
        } else {
          sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      SetLoading(false);
      SetLoaded(true);
    }
  };

    return (
      <View style={styles.container}>
        {/*<Slider currentPos={Value} duration={Duration}/>*/}
        <Slider
          style={{ width: 365 }}
          minimumValue={0}
          maximumValue={100}
          value={Value}
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
          {Loading ? (
            <ActivityIndicator size={"small"} color={"red"}/>
          )
          : !Loaded ?
              <Button title={"Load"} onPress={LoadAudio}/>
              :
              <Button title={"Play"} onPress={Playing ? PauseAudio : PlayAudio}/>
          }

          <RewindButton isForward={true}/>
        </View>
      </View>
    );

}

export default Controls;