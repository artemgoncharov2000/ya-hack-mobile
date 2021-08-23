import React, {useEffect} from 'react';
import {View, Text} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {SliderStyles as styles} from "./Slider.styles";
import moment from "moment";
import Slider from "@react-native-community/slider";

type PropsT = {
  value: number,
  duration: number,
  onSlidingComplete: (value: number) => {},
  currentMillis: number,
}

const PlayerSlider: React.FC<PropsT> = ({
  value,
  duration,
  onSlidingComplete,
  currentMillis,
}) => {

  const getTime = (millis: number) => {
    // console.log('millis', millis);
    const duration = moment.duration(millis);

    const seconds = Math.trunc(duration.asSeconds());
    let date = new Date(seconds * 1000);
    // console.log('millis', seconds);
    return date.toISOString().substr(11, 8);
  }

  return (
    <View>
      {/*<MultiSlider*/}
      {/*  pressedMarkerStyle={styles.pressedMarker}*/}
      {/*  markerStyle={styles.marker}*/}
      {/*  selectedStyle={styles.selected}*/}
      {/*  sliderLength={365}*/}
      {/*  containerStyle={styles.sliderContainer}*/}

      {/*/>*/}
      <Slider
        style={{ width: 365 }}
        minimumValue={0}
        maximumValue={100}
        value={value}
        // onValueChange={() => {console.log(value)}}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor={'white'}
      />
      <View style={styles.timeStatusContainer}>
        <Text style={styles.timeText}>{getTime(currentMillis)}</Text>
        <Text style={styles.timeText}>{getTime(duration)}</Text>
      </View>
    </View>

  );
};

export default PlayerSlider;

