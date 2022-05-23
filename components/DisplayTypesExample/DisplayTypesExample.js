import {
  GridDisplay,
  MasonryDisplay,
  MetroDisplay,
  StageDisplay,
} from "../Svg";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

import Masonry from "react-masonry-css";
import styles from "./DisplayTypesExample.module.scss";

export default function DisplayTypesExample() {
  const [display, setDisplay] = useState("Masonry");

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button
          onClick={() => setDisplay("Masonry")}
          className={`btn-s ${display === "Masonry" && "active"}`}
        >
          <MasonryDisplay />
          Masonry
        </button>
        <button
          onClick={() => setDisplay("Grid")}
          className={`btn-s ${display === "Grid" && "active"}`}
        >
          <GridDisplay />
          Grid
        </button>
        <button
          onClick={() => setDisplay("Stage")}
          className={`btn-s ${display === "Stage" && "active"}`}
        >
          <StageDisplay />
          Stage
        </button>
        <button
          onClick={() => setDisplay("Metro")}
          className={`btn-s ${display === "Metro" && "active"}`}
        >
          <MetroDisplay />
          Metro
        </button>
      </div>
      <Display display={display} />
    </div>
  );
}

function Display({ display }) {
  const controls = useAnimation();

  const variants = {
    visible: { opacity: 1, transform: "scale(1)" },
    hidden: {
      opacity: 0,
      transform: "scale(0.8)",
      transition: { duration: 0 },
    },
  };

  const sequence = async () => {
    await controls.start("hidden");
    return await controls.start("visible");
  };

  useEffect(() => {
    sequence();
  }, [display]);

  let boxes = [
    {
      height: 375,
      width: "auto",
    },
    {
      height: 233,
      width: "auto",
    },
    {
      height: 170,
      width: "auto",
    },
    {
      height: 137,
      width: "auto",
    },
    {
      height: 305,
      width: "auto",
    },
    {
      height: 185,
      width: "auto",
    },
    {
      height: 189,
      width: "auto",
    },
    {
      height: 189,
      width: "auto",
    },
    {
      height: 275,
      width: "auto",
    },
  ];

  if (display === "Stage") {
    boxes = [
      {
        height: 400,
        width: "auto",
      },
      {
        height: 230,
        width: "auto",
      },
    ];
  }

  if (display === "Metro") {
    boxes = [
      {
        height: 210,
        width: "auto",
      },
      {
        height: 210,
        width: "auto",
      },
      {
        height: 210,
        width: "auto",
      },
      {
        height: 210,
        width: "auto",
      },
      {
        height: 210,
        width: "auto",
      },
      {
        height: 210,
        width: "auto",
      },
    ];
  }

  return (
    <div className={styles.displayContainer}>
      {display !== "Metro" && (
        <Masonry
          breakpointCols={display === "Stage" ? 1 : 3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {boxes.map(({ height, width }, index) => {
            return (
              <motion.div
                animate={controls}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: index * 0.05,
                }}
                initial="hidden"
                variants={variants}
                key={index}
                style={{
                  height: display === "Grid" ? 210 : height,
                  width,
                  backgroundImage: `url(https://picsum.photos/300?random=${index})`,
                }}
                className={styles.box}
              />
            );
          })}
        </Masonry>
      )}
      {display === "Metro" && (
        <div className={styles.metroContainer}>
          {boxes.map(({ height, width }, index) => {
            return (
              <motion.div
                animate={controls}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: index * 0.05,
                }}
                initial="hidden"
                variants={variants}
                key={index}
                style={{
                  height,
                  width,

                  backgroundImage: `url(https://picsum.photos/300?random=${index})`,
                }}
                className={styles.box}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
