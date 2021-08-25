import React from "react";
import Podcast from "../components/PodcastScreen/Podcast";
import Player from "../components/PlayerScreen/Player";
import LoadScreen from "../components/LoadScreen/LoadScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {selectPodcast} from "../modules/podcast/selectors";


const Navigation: React.FC = () => {
  const podcast = useSelector(selectPodcast);
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Load"}
      >
        {
          podcast
            ?
            (
              <>
                <Stack.Screen
                  name={"EpisodesList"}
                  component={Podcast}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name={"Player"}
                  component={Player}
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )
            :
            <Stack.Screen
              name={"Load"}
              component={LoadScreen}
              options={{
                headerShown: false,
              }}
            />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;