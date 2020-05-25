import React from 'react';

import styles from './MidSection.module.scss';

const MidSection = () => {
  const boxes = ['b1', 'b2', 'b3', 'b4', 'b5'];

  return (
    <div className="row">
      <div className="col-1-of-2">
        <div className={`row ${styles.title}`}>
          <div>New Features</div>
          <div>
            in <span className={styles['title-bold']}>Designer</span>
          </div>
        </div>
        <div className={`row ${styles.headline}`}>
          Lorem ipsum dolor sit amet, etiam populo numquam duo id.
          Duis epicuri sed ad, sea soluta dicunt adipisci ei. Te elitr
          regione moderatius cum, quo vero scribentur id.
        </div>
      </div>
      <div className="col-1-of-2">
        <div className={styles.composition}>
          {boxes.map((box) => {
            return (
              <div
                className={`${styles['box']} ${
                  styles[`box--${box}`]
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MidSection;
