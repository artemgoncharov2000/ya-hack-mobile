import React, {useEffect} from "react";
import {EpisodesListStyles as styles} from "./EpisodesList.styles";
import {FlatList, View, Text, RefreshControl} from "react-native";
import EpisodeItem from "./EpisodeItem/EpisodeItem";
import {EpisodeT} from "../../../modules/podcast/model";
import {useDispatch} from "react-redux";
import {loadPodcast} from "../../../modules/podcast/actions";
import {TEST_PODCAST_ID} from "../../LoadScreen/LoadScreen";

type PropsT = {
  handlePressOnEpisode: () => void;
  episodes: Array<EpisodeT>;
}

const EpisodesList: React.FC<PropsT> = ({
  handlePressOnEpisode,
  episodes
}) => {

  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    setRefreshing(false);
  }, [refreshing])

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(loadPodcast(TEST_PODCAST_ID));
  }

  const getTotalEpisodesTitle = () => {
    if (episodes.length === 0) {
      return `${episodes.length} эпизодов`
    }
    if (episodes.length === 1) {
      return `${episodes.length} эпизод`
    }
    if (episodes.length > 1 && episodes.length <= 4) {
      return `${episodes.length} эпизода`
    }
    if (episodes.length > 4) {
      return `${episodes.length} эпизодов`
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.totalEpisodesContainer}>{getTotalEpisodesTitle()}</Text>
      <FlatList
        data={episodes}
        renderItem={({item}) => <EpisodeItem title={item.title} guid={item.guid} duration={item.duration} onPress={handlePressOnEpisode}/>}
        keyExtractor={(item) => item.guid}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />
    </View>
  )
}

export default EpisodesList;