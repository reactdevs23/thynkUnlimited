import React from "react";
import styles from "./Header.module.css";

const Header = ({ heading, logo, id, topWave }) => {
  return (
    <>
      <div className={styles.topWave}>{topWave}</div>
      <div className={styles.header}>
        <h3
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h3>
        <div alt="#" className={styles.logo}>
          {logo({ id: id })}
        </div>
      </div>
    </>
  );
};

export default Header;
