import React from 'react';
import { Text, View} from "react-native";
import {PodcastInfoStyles as styles} from "./PodcastInfo.styles";
import Cover, {ImageSize} from "../../PlayerScreen/InteractiveArea/Cover/Cover";
import Button from '../../Button/Button';
import ShuffleButton from "../../ShuffleButton/ShuffleButton";
import {EpisodeT} from "../../../modules/podcast/model";
import shuffle from 'lodash/shuffle';
import {useDispatch} from "react-redux";
import {setEpisodeGuid} from "../../../modules/episode/actions";

type PropsT = {
  title: string;
  description: string;
  imageUrl: string;
  episodes: Array<EpisodeT>;
  handlePressOnShuffle: () => void;
}

const PodcastInfo: React.FC<PropsT> = ({
  title,
  description,
  imageUrl,
  episodes,
  handlePressOnShuffle,
}) => {

  const dispatch = useDispatch();

  const onShuffle = () => {
    const shuffledEpisodes = shuffle(episodes);
    const episode = shuffledEpisodes[0];
    dispatch(setEpisodeGuid(episode.guid));
    handlePressOnShuffle();
  }

  return (
    <View style={styles.container}>
      <Cover imageSize={ImageSize.MEDIUM} backgroundImageUrl={imageUrl}/>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ShuffleButton onPress={onShuffle}/>
      </View>
    </View>
  );
}

export default PodcastInfo;