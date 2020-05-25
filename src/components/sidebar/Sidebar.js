import React from 'react';

import styles from './Sidebar.module.scss';
import Form from './form/Form';
import Header from './header/Header';
import Footer from './footer/Footer';

const Sidebar = () => {
  return (
    <div className="col-1-of-3">
      <div className={styles.container}>
        <div className="row">&nbsp;</div>
        <Header></Header>
        <Form></Form>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Sidebar;
