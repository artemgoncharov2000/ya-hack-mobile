import React from 'react';
import Player from "./src/components/Player/Player";
import rootSaga from "./src/modules/sagas";
import rootReducer, {RootState} from "./src/modules/reducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from "redux";
import Podcast from "./src/components/Podcast/Podcast";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)
//@ts-ignore
window.store = store;
sagaMiddleware.run(rootSaga);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"EpisodesList"}
        >
          <Stack.Screen
            name={"EpisodesList"}
            component={Podcast}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name={"Player"} component={Player}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
