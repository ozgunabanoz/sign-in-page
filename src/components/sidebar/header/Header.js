import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className="row">
      <div className={`col-2-of-4 ${styles['sign-in--title']}`}>
        Sign In
      </div>
      <div className={`col-2-of-4 ${styles['sign-up--title']}`}>
        Sign Up
      </div>
    </div>
  );
};

export default Header;
