import React, {useState} from 'react';
import {SafeAreaView, ScrollView, SliderComponent, View} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {PlayerStyles} from "./Player.styles";
import Header from "./Header/Header";
import InteractiveArea from "./InteractiveArea/InteractiveArea";
import SongInfo from "./SongInfo/SongInfo";
import PlayControls from "./PlayControls/PlayControls";
import Footer from "./Footer/Footer";

const Player: React.FC = () => {

  return (
    <SafeAreaView style={PlayerStyles.Player}>
      <Header title={"Sebrant Chatting"}/>
      <InteractiveArea/>
      <SongInfo
        title={'Очередной подкаст Себранта'}
        subtitle={'Sebrant Chatting'}
      />
      <PlayControls/>
      <Footer/>
    </SafeAreaView>
  )
}

export default Player;