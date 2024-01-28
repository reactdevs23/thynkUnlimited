import React from "react";
import styles from "./SingleThynk.module.css";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

const SingleThynk = ({
  id,
  title,
  info,
  list,
  heading,
  logo,
  contact,
  link,
  topWave,
  bottomWave,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <Header heading={heading} logo={logo} id={id} topWave={topWave} />
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.id}>{id}</h2>

          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
          <p />
          <p className={styles.info}>{info}</p>
          <p />
          {list && (
            <div className={styles.listContainer}>
              {list.map((el, i) => (
                <p className={styles.list} key={i}>
                  {el}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer contact={contact} link={link} bottomWave={bottomWave} id={id} />
    </div>
  );
};

export default SingleThynk;
