import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import firebase from './config/fbConfig'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance} from 'redux-firestore'

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})),
  )
  );

  const rffProps = {
    firebase, 
    config: {userProfile : 'users', useFirestoreForProfile : true},
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rffProps}>
            <App />  
        </ReactReduxFirebaseProvider>
    </Provider>, 
document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
