import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ id, contact, link, bottomWave }) => {
  return (
    <>
      <div className={styles.footer}>
        <a
          href="#/"
          target="_blank"
          rel="noreferrer"
          className={styles.contact}
        >
          {contact}
        </a>
        <a href="#/" target="_blank" rel="noreferrer" className={styles.link}>
          {link}
        </a>
      </div>
      <div className={styles.bottomWave}>{bottomWave}</div>
    </>
  );
};

export default Footer;
