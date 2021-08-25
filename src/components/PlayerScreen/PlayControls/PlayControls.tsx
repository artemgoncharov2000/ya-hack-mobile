import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator} from "react-native";
import {ControlsStyles as styles} from "./Controls.styles";
import PlayButton from "../../PlayButton/PlayButton";
import isNil from 'lodash/isNil';
// import Slider from "../../Slider/Slider";
import RewindButton from "../../RewindButton/RewindButton";
import {Audio, AVPlaybackStatus} from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import Slider from '@react-native-community/slider';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getItemsByKey, getTimesEnd} from "../../../modules/episode/selectors";
import {setCurrentItem} from "../../../modules/current-item/actions";
import PlayerSlider from "../../Slider/Slider";
import {selectCurrentItem} from "../../../modules/current-item/selectors";

type PropsT = {
  trackUrl: string;
}

const PlayControls: React.FC<PropsT> = ({trackUrl}) => {
  const currentItem = useSelector(selectCurrentItem);
  const dispatch = useDispatch();
  const itemsByKey = useSelector(getItemsByKey);
  const timesEnd = useSelector(getTimesEnd);
  const [loaded, setLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [currentMillis, setCurrentMillis] = React.useState(0);
  const sound = React.useRef(new Audio.Sound());


  const updateCurrentItem = (seconds: number) => {

    if (timesEnd[seconds]) {
      dispatch(setCurrentItem(null));
    }

    const item = itemsByKey[seconds];

    if (!isNil(item)) {
      dispatch(setCurrentItem(item));
    }

  }

  const updateStatus = async (data) => {
    try {
      if (data.didJustFinish) {
        await resetPlayer();
      } else if (data.positionMillis) {
        const duration = moment.duration(data.positionMillis);
        const seconds = Math.trunc(duration.asSeconds());
        updateCurrentItem(seconds);
        setCurrentMillis(data.positionMillis);
        if (data.durationMillis) {
          setValue((data.positionMillis / data.durationMillis) * 100);
        }
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const resetPlayer = async () => {
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


  const playAudio = async () => {
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

  const pauseAudio = async () => {
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

  const seekUpdate = async (currentPos: number) => {
    try {
      const checkLoading = await sound.current.getStatusAsync();
      if (checkLoading.isLoaded) {
        const result = (currentPos / 100) * duration;
        await sound.current.setPositionAsync(Math.round(result));
        setCurrentMillis(Math.round(result));
      }
    } catch (error) {
      console.log('Error');
    }
  };

  const loadAudio = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (!checkLoading.isLoaded) {
      try {
        const result = await sound.current.loadAsync(
          {uri: trackUrl},
          {},
          true
        );
        if (!result.isLoaded) {
          setLoading(false);
          setLoaded(false);
          console.log('Error in Loading Audio');
        } else {
          await sound.current.setOnPlaybackStatusUpdate(updateStatus);
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

  const handleMoveForward = async () => {
    const newPos = value + 5;
    await seekUpdate(newPos);
  }

  const handleMoveBackward = async () => {
    const newPos = value - 5;
    await seekUpdate(newPos);
  }

  useEffect(() => {
    loadAudio()
  }, []);


    return (
      <View style={styles.container}>
        {/*<Slider currentPos={Value} duration={Duration}/>*/}

        <PlayerSlider
          value={value}
          currentMillis={currentMillis}
          duration={duration}
          onSlidingComplete={(currentPos) => seekUpdate(currentPos)}
        />
        <View style={styles.buttonsContainer}>
          <RewindButton isForward={false} onPress={handleMoveBackward}/>
          {loading ? (
            <ActivityIndicator size={"small"} color={"white"}/>
          )
          : loaded && (
              <PlayButton playing={playing} onPress={playing ? pauseAudio : playAudio}/>
            )
          }
          <RewindButton isForward={true} onPress={handleMoveForward}/>
        </View>
      </View>
    );

}

export default PlayControls;