import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend Developer",
    Svg: require("../../../static/img/frontend-icon.svg").default,
    description: (
      <>
        Using JavaScript libraries and frameworks like React, Vue, GSAP, Axios,
        Three JS etc.
      </>
    ),
  },
  {
    title: "Graphic designer",
    Svg: require("../../../static/img/graphic-design-icon.svg").default,
    description: <>Creative design work for digital asset creation</>,
  },
  {
    title: "Bitcoin Advocate",
    Svg: require("../../../static/img/bitcoin-btc-logo.svg").default,
    description: (
      <>Bitcoin is a means of self-sovereignty, freedom, and innovation.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
