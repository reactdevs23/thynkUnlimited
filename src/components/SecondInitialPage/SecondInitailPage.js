import React from "react";
import styles from "./SecondInitialPage.module.css";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const SecondInitialPage = ({
  title,
  info,
  heading,
  logo,
  contact,
  link,
  topWave,
  bottomWave,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <Header heading={heading} logo={logo} topWave={topWave} />
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>

          <p className={styles.info}>{info}</p>
        </div>
      </div>
      <Footer contact={contact} link={link} bottomWave={bottomWave} />
    </div>
  );
};

export default SecondInitialPage;
