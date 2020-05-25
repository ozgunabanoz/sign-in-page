import React from 'react';

import styles from './Form.module.scss';

const Form = () => {
  return (
    <div className="row">
      <form>
        <div className={`row ${styles.container}`}>
          <i className="fa fa-envelope-o"></i>
          <input
            className={`${styles['form--input']}`}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className={`row ${styles.container}`}>
          <i className="fa fa-lock"></i>
          <input
            className={`${styles['form--input']}`}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="row">
          <div className={`col-2-of-4 ${styles.left}`}>
            <a href="/">Forgot Password</a>
          </div>
          <div className={`col-2-of-4 ${styles.right}`}>
            <button type="submit">Sign In</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
