import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Effortless Web App Development",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg")
      .default,
    description: (
      <>
        Streamline dynamic web app development, maximizing
        Webflow's potential for a powerful yet user-friendly
        experience.
      </>
    ),
  },
  {
    title: "Seamless Webflow Integration",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg")
      .default,
    description: (
      <>
        Integrate routing control and REST API features
        seamlessly within Webflow, maintaining an intuitive
        web development process.
      </>
    ),
  },
  {
    title: "Empowerment for Efficiency",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg")
      .default,
    description: (
      <>
        You're in control, simplify complex tasks, and
        expedite project delivery with ease, ensuring
        efficient, high-quality web app development.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
