import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

// Local imports
import config from './config';
import * as stores from './stores'; // mobx stores
import createRouter from './create-router5' // Router5
import Layout from './components/Layout'

// Global Styles
import './styles/base/_reset.sass';
import './styles/base/_commons.sass';

const router = createRouter(true);

// Provider will add your pass the stores instances using context
const App = (
  <Provider { ...stores } >
    <Layout/>
  </Provider>
);

// Render the entire app when the router starts
router.start((err, state) => {
  ReactDOM.render(
    App,
    document.getElementById('app')
  );
});



