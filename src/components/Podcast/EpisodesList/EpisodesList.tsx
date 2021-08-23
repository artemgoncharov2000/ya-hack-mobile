import React from "react";
import {EpisodesListStyles as styles} from "./EpisodesList.styles";
import {View} from "react-native";
import EpisodeItem from "./EpisodeItem/EpisodeItem";

const EpisodesList: React.FC = () => {

  const mockData = [
    {
      title: 'episode 1',
      duration: 23
    },
    {
      title: 'episode 2',
      duration: 43
    },
    {
      title: 'episode 3',
      duration: 10
    },
  ]
  return (
    <View style={styles.container}>
      {
        mockData.map((data, index) => {
          return (
            <EpisodeItem key={index} title={data.title} duration={data.duration}/>
          );
        })
      }
    </View>
  )
}

export default EpisodesList;