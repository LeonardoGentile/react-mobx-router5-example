import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RouterProvider } from 'react-router5';
import Layout from './components/Layout'

// Local imports
import * as config from './config';
import * as stores from './stores'; // mobx stores
import createRouter from './create-router5' // Router5

//  =================
//  = Global Styles =
//  =================
import './styles/base/_reset.sass';
import './styles/base/_commons.sass';

const router = createRouter(true);

// RouterProvider will add your router instance in context.
const wrappedApp = (
  <Provider { ...stores } >
      <RouterProvider router= { router }>
          <Layout/>
      </RouterProvider>
  </Provider>
);

// Render the entire app when the router starts
router.start((err, state) => {
  ReactDOM.render(
    wrappedApp,
    document.getElementById('app')
  );
});



