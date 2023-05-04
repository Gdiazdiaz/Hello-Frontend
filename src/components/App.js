import React from 'react';

import { Provider } from 'react-redux';
import Store from '../redux/ConfigureStore';
import Greeting from './Greeting';

const App = () => (
  <Provider store={Store}>
    <Greeting />
  </Provider>
);

export default App;
