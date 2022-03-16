import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { history, persistor, store } from './store';
import Router from './router';
import 'react-toastify/dist/ReactToastify.css';

interface AppPropsInteface {}

const App:React.FunctionComponent<AppPropsInteface> = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
      <Router history={history} />
    </PersistGate>
  </Provider>

);

export default App;
