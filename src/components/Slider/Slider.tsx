import React from 'react';
import {View, Text} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {SliderStyles as styles} from "./Slider.styles";
import moment from "moment";

type PropsT = {
  currentPos: number,
  duration: number,
}

const Slider: React.FC<PropsT> = ({
  currentPos,
  duration,
}) => {

  const getTime = (millis: number) => {
    const duration = moment.duration(millis);
    const hours = Math.trunc(duration.asHours());
    const minutes = Math.trunc(duration.asMinutes());
    const seconds = Math.trunc(duration.asSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <View>
      <MultiSlider
        pressedMarkerStyle={styles.pressedMarker}
        markerStyle={styles.marker}
        selectedStyle={styles.selected}
        sliderLength={365}
        containerStyle={styles.sliderContainer}

      />
      <View style={styles.timeStatusContainer}>
        <Text style={styles.timeText}>{getTime(currentPos)}</Text>
        <Text style={styles.timeText}>{getTime(duration)}</Text>
      </View>
    </View>

  );
};

export default Slider;

