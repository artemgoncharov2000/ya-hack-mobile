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
import {getCurrentGuid, selectEpisode} from "../../modules/episode/selectors";

type PropsT = {
  navigation: any;
}
const Player: React.FC<PropsT> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const currentGuid = useSelector(getCurrentGuid);
  const episode = useSelector(selectEpisode);

  useEffect(() => {
    dispatch(loadEpisode(currentGuid));
  }, [])

  return (
    <SafeAreaView style={PlayerStyles.Player}>
      <Header title={episode.title} navigation={navigation}/>
      <InteractiveArea defaultImageUrl={episode.defaultImageUrl}/>
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