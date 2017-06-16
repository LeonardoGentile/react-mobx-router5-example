import React from 'react';

import Header from './Header/Header';
import Main from '../Main/Main';
import Footer from './Footer/Footer';


import styles from './Layout.sass';

class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>

        <div className={styles.bodyLoader}/>

        <Header />

        <main className={styles.mainContainer}>
          <Main />
        </main>

        <footer className={styles.footerContainer}>
          <Footer />
        </footer>


      </div>
    );
  }
}

export default Layout;

