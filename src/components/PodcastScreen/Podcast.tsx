import React, {useEffect} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import { PodcastStyles as styles } from "./Podcast.styles";
import PodcastInfo from "./PodcastInfo/PodcastInfo";
import EpisodesList from "./EpisodesList/EpisodesList";
import {useDispatch, useSelector} from "react-redux";
import {selectPodcast} from "../../modules/podcast/selectors";
import {loadPodcast} from "../../modules/podcast/actions";


type PropsT = {
  navigation: any;
}

const Podcast: React.FC<PropsT> = ({navigation}) => {
  const podcast = useSelector(selectPodcast);
  const navigateToPlayer = () => {
    navigation.navigate('Player');
  }

  return (
    <SafeAreaView style={styles.container}>
      {
        podcast
        ?
          <>
            <PodcastInfo
              title={podcast.title}
              description={podcast.description}
              imageUrl={podcast.imageUrl}
              episodes={podcast.episodesPreviews}
              handlePressOnShuffle={navigateToPlayer}
            />
            <EpisodesList  episodes={podcast.episodesPreviews} handlePressOnEpisode={navigateToPlayer}/>
          </>
        :
         <ActivityIndicator color={'white'} size={'large'}/>
      }
    </SafeAreaView>
  )
}

export default Podcast;