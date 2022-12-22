import {createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './reducers/Auth/authReducer';
import userReducer from './reducers/User/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
  whitelist: ['user'],
};

const RootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(RootReducer, compose(applyMiddleware(Thunk)));
const persistor = persistStore(store);

export {store, persistor};
