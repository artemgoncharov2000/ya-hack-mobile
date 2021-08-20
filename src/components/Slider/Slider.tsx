import React from 'react';
import {View, Text} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {SliderStyles as styles} from "./Slider.styles";

const Slider: React.FC = () => {


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
        <Text style={styles.timeText}>{"00:00"}</Text>
        <Text style={styles.timeText}>{"14:15"}</Text>
      </View>
    </View>

  );
};

export default Slider;

