import React from 'react';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Main from '../Main/Main';

import styles from './Layout.sass';

class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className={styles.bodyLoader}></div>

        <header>
          <Header />
        </header>

        <main>
          <Main />
        </main>

        <footer>
          <Footer />
        </footer>

        <aside>
          <Sidebar />
        </aside>

      </div>
    );
  }
}

export default Layout;

