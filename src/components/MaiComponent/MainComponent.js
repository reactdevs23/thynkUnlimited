import React from "react";
import styles from "./MainComponent.module.css";

import SingleThynk from "../SingleThynk/SingleThynk";
import InitialPage from "../InitialPage/InitialPage";
import SecondInitialPage from "../SecondInitialPage/SecondInitailPage";

const MainComponent = ({ allData }) => {
  return (
    <div
      className={styles.mainWrapper}
      style={{ background: allData.background }}
    >
      <InitialPage
        totalWays={allData.data.length}
        heading={allData.heading}
        logo={allData.logo}
        contact={allData.contact}
        link={allData.link}
        {...allData.initialPage}
        topWave={allData.topWave}
        bottomWave={allData.bottomWave}
      />
      <SecondInitialPage
        totalWays={allData.data.length}
        heading={allData.heading}
        logo={allData.logo}
        contact={allData.contact}
        link={allData.link}
        {...allData.secondPage}
        topWave={allData.topWave}
        bottomWave={allData.bottomWave}
      />
      {allData.data.map((el, i) => (
        <SingleThynk
          key={i}
          heading={allData.heading}
          logo={allData.logo}
          contact={allData.contact}
          link={allData.link}
          id={i + 1}
          {...el}
          topWave={allData.topWave}
          bottomWave={allData.bottomWave}
        />
      ))}
    </div>
  );
};

export default MainComponent;
