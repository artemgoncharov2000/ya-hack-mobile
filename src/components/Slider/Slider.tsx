import React from 'react';
import {View, Text} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {SliderStyles as styles} from "./Slider.styles";

type PropsT = {
  currentPos: number,
  duration: number,
}

const Slider: React.FC<PropsT> = ({
  currentPos,
  duration,
}) => {


  return (
    <View>
      <MultiSlider
        // customMarker={(e)=> {
        //   return (<Marker pressed={e.pressed}/>);
        // }}
        pressedMarkerStyle={styles.pressedMarker}
        markerStyle={styles.marker}
        selectedStyle={styles.selected}
        sliderLength={365}
        containerStyle={styles.sliderContainer}
      />
      <View style={styles.timeStatusContainer}>
        <Text style={styles.timeText}>{currentPos}</Text>
        <Text style={styles.timeText}>{duration}</Text>
      </View>
    </View>

  );
};

export default Slider;

