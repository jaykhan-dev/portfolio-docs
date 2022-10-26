import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend Developer",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Using JavaScript libraries and frameworks like React, Vue, GSAP, Axios,
        Three JS etc.
      </>
    ),
  },
  {
    title: "UI/UX designer",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>A good user experience depends on empathy and simplicity.</>,
  },
  {
    title: "Bitcoin Advocate",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
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
