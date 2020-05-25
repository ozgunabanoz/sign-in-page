import React from 'react';

import styles from './Main.module.scss';
import Header from './header/Header';
import MidSection from './mid-section/MidSection';
import LastSection from './last-section/LastSection';

const Main = () => {
  return (
    <div className="col-2-of-3">
      <div className={styles.container}>
        <Header></Header>
        <MidSection></MidSection>
        <LastSection></LastSection>
      </div>
    </div>
  );
};

export default Main;
