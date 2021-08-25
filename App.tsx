import React from 'react';

import rootSaga from "./src/modules/sagas";
import rootReducer, {RootState} from "./src/modules/reducer";
import {Provider, useSelector} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from "redux";
import Navigation from "./src/navigation/Navigation";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
)
//@ts-ignore
window.store = store;
sagaMiddleware.run(rootSaga);



export default function App() {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
