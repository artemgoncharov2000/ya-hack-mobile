import React from 'react';
import Player from "./src/components/Player/Player";
import rootSaga from "./src/modules/sagas";
import rootReducer, {RootState} from "./src/modules/reducer";
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from "redux";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga);


export default function App() {
  return (
    <Provider store={store}>
      <Player/>
    </Provider>
  );
}
