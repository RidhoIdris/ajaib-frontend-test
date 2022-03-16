import thunk from 'redux-thunk';
import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import { history } from '../helpers';
import authReducers from './Auth/auth.reducer';
import homeReducers from './Home/home.reducer';

const routeMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  home: homeReducers,
  auth: authReducers,
  router: connectRouter(history),
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk, routeMiddleware)));

const persistor = persistStore(store);

export const purgingState = async () => {
  try {
    await persistor.purge();
  } catch (error) {
    // alert('error purging state');
  }
};

// purgingState();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export {
  store,
  persistor,
  history,
};
// export { history, store };
