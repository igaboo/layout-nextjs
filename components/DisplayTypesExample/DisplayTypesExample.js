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

  const [radius, setRadius] = useState(20);
  const [padding, setPadding] = useState(16);
  // const [size, setSize] = useState(null);

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
        <div className="btn-slider">
          <p>Corner Radius</p>
          <input
            id="radius"
            name="radius"
            type="range"
            min="0"
            max="120"
            step="0.01"
            defaultValue={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
        <div className="btn-slider">
          <p>Padding</p>
          <input
            id="padding"
            name="padding"
            type="range"
            min="4"
            max="16"
            step="0.01"
            defaultValue={padding}
            onChange={(e) => setPadding(e.target.value)}
          />
        </div>
        {/* <div className="btn-slider">
          <p>Image Size</p>
          <input
            id="size"
            name="size"
            type="range"
            min="50"
            max="250"
            step="0.01"
            defaultValue={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div> */}
      </div>

      <Display
        display={display}
        radius={radius}
        padding={padding}
        // size={size}
      />
    </div>
  );
}

function Display({ display, radius, padding, size }) {
  const controls = useAnimation();

  const variants = {
    visible: { opacity: 1, transform: "translate(0px, 0px)" },
    hidden: {
      opacity: 0,
      transform: "translate(0px, 100px)",
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

  useEffect(() => {
    const grid = document.getElementsByClassName("my-masonry-grid")[0];
    if (grid) {
      grid.style.marginLeft = `-${padding}px`;
    }

    const columns = Array.from(
      document.getElementsByClassName("my-masonry-grid_column")
    );
    columns.forEach((col) => {
      col.style.paddingLeft = `${padding}px`;
    });
    const boxes = Array.from(document.getElementsByClassName("box"));
    boxes.forEach((box) => {
      box.style.marginBottom = `${padding}px`;
    });
    if (display === "Metro") {
      const metroContainer =
        document.getElementsByClassName("metroContainer")[0];
      metroContainer.style.columnGap = `${padding}px`;
    }
  }, [padding, display]);

  // useEffect(() => {
  //   if (size === null) return;
  //   const images = Array.from(document.getElementsByClassName("box"));
  //   images.forEach((image) => {
  //     image.style.backgroundSize = `${size}%`;
  //   });
  // }, [size, display]);

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
    {
      height: 275,
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
        height: 300,
        width: "auto",
      },
      {
        height: 500,
        width: "auto",
      },
      {
        height: 450,
        width: "auto",
      },
      {
        height: 300,
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
                  delay: index * 0.02,
                }}
                initial="hidden"
                variants={variants}
                key={index}
                style={{
                  height: display === "Grid" ? 210 : height,
                  width,
                  borderRadius: `${radius}px`,
                  backgroundImage: `url(https://picsum.photos/300?random=${index})`,
                }}
                className={`${styles.box} box`}
              />
            );
          })}
        </Masonry>
      )}
      {display === "Metro" && (
        <div className={`metroContainer ${styles.metroContainer}`}>
          {boxes.map(({ height, width }, index) => {
            return (
              <motion.div
                animate={controls}
                transition={{
                  type: "spring",
                  duration: 1,
                  bounce: 0.3,
                  delay: index * 0.02,
                }}
                initial="hidden"
                variants={variants}
                key={index}
                style={{
                  height,
                  width,
                  borderRadius: `${radius}px`,
                  backgroundImage: `url(https://picsum.photos/300?random=${index})`,
                }}
                className={`${styles.box} box`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
