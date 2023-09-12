// ErrorPage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Error.module.css'
const ErrorPage = () => {
  return (
    <div className={styles.body}>
    <div className={styles.containars}>
      <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTD5BLxB4WqRLf6eQ7vnQGAFWXOtddq-EEuuWkQZHwk_VniKul4' alt=''/>
      <h1>404</h1>
      <p>Oops!!, Page Not Found</p>
      <NavLink
                className={styles.white}
                to=""
              >
              <h3>Go Back to HomePage</h3> 
              </NavLink>
    </div>
    </div>
  );
};

export default ErrorPage;
