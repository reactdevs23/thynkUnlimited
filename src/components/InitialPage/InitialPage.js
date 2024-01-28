import React from "react";
import styles from "./InitialPage.module.css";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const InitialPage = ({
  totalWays,
  title,
  tagline,
  heading,
  logo,
  contact,
  link,
  topWave,
  bottomWave,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <Header heading={heading} logo={logo} id={1} topWave={topWave} />
      <div className={styles.wrapper}>
        <h2 className={styles.totalWays}>{totalWays}</h2>

        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <p className={styles.tagline}>({tagline})</p>
      </div>
      <Footer contact={contact} link={link} bottomWave={bottomWave} />
    </div>
  );
};

export default InitialPage;
