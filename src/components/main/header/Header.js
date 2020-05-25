import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  const links = ['Home', 'Support', 'Contact'];

  return (
    <div className="row">
      <div className={styles.container}>
        {links.map((link) => {
          return (
            <a href="/#" key={link}>
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
