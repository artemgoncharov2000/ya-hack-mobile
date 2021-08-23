import React from 'react';
import {SafeAreaView, View} from 'react-native';
import { PodcastStyles as styles } from "./Podcast.styles";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import EpisodesList from "./EpisodesList/EpisodesList";

const Podcast: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PodcastInfo/>
      <EpisodesList/>
    </SafeAreaView>
  )
}

export default Podcast;