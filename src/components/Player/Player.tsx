import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, SliderComponent, View} from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import {PlayerStyles} from "./Player.styles";
import Header from "./Header/Header";
import InteractiveArea from "./InteractiveArea/InteractiveArea";
import SongInfo from "./SongInfo/SongInfo";
import PlayControls from "./PlayControls/PlayControls";
import Footer from "./Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {loadEpisode} from "../../modules/episode/actions";
import {selectEpisode} from "../../modules/episode/selectors";

const Player: React.FC = () => {
  const dispatch = useDispatch()
  const episode = useSelector(selectEpisode);

  useEffect(() => {
    const guid = '4ceec985-08bb-c5b3-ca67-1b78d33a91df';
    dispatch(loadEpisode(guid));
  }, [])

  return (
    <SafeAreaView style={PlayerStyles.Player}>
      <Header title={episode.title}/>
      <InteractiveArea/>
      <SongInfo
        title={episode.description}
        subtitle={episode.title}
      />
      <PlayControls trackUrl={episode.url}/>
      <Footer/>
    </SafeAreaView>
  )
}

export default Player;