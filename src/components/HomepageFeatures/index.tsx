import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Robust developer toolkit",
    src: require("@site/static/img/a.png").default,
    description: (
      <>
        With xAtom's reverse proxy enabled in dev mode, you can
        view live changes on your localhost without pushing or
        linking your localhost script to the site, along with the
        ability to build production-level minified builds.
      </>
    ),
  },
  {
    title: "First-class support for Webflow elements",
    src: require("@site/static/img/b.png").default,
    description: (
      <>
        xAtom's components, routing-based logic execution, data
        service APIs, and the ability to scale native Webflow
        components like nav, tab, slider, and collection list
        make it a powerful framework for your needs.
      </>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={src}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
