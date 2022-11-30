import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const FeatureList = [
  {
    title: "Frontend Developer",
    Svg: require("../../../static/img/frontend-blue.svg").default,
    description: (
      <>
        Using JavaScript libraries and frameworks like React, NextJS, Vue, GSAP,
        Axios, Tailwind CSS, Three JS etc.
        <br />
        <Link to="/docs/web-dev/nozomi">See Projects</Link>
      </>
    ),
  },
  {
    title: "Graphic designer",
    Svg: require("../../../static/img/gd-blue.svg").default,
    description: (
      <>
        Designing websites, marketing material, digital assets, visual
        storytelling etc.
        <br />
        <Link to="/docs/graphics/social-media">See projects</Link>
      </>
    ),
  },
  {
    title: "Bitcoin Advocate",
    Svg: require("../../../static/img/bitcoin-blue.svg").default,
    description: (
      <>Building apps and e-comm stores using the Bitcoin Lightning Network.</>
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
    <section id="HomepageFeatures-bg" className={styles.features}>
      <div className="container" id="features-filter">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
