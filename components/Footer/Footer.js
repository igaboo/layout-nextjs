import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Logo } from "../Svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      {/* waves */}
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(141, 88, 187, 1)" offset="0%"></stop>
            <stop
              stopColor="rgba(200.638, 148.127, 246.213, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,45L48,57.5C96,70,192,95,288,100C384,105,480,90,576,70C672,50,768,25,864,17.5C960,10,1056,20,1152,35C1248,50,1344,70,1440,82.5C1536,95,1632,100,1728,105C1824,110,1920,115,2016,100C2112,85,2208,50,2304,35C2400,20,2496,25,2592,30C2688,35,2784,40,2880,35C2976,30,3072,15,3168,12.5C3264,10,3360,20,3456,20C3552,20,3648,10,3744,27.5C3840,45,3936,90,4032,92.5C4128,95,4224,55,4320,37.5C4416,20,4512,25,4608,45C4704,65,4800,100,4896,110C4992,120,5088,105,5184,102.5C5280,100,5376,110,5472,117.5C5568,125,5664,130,5760,125C5856,120,5952,105,6048,90C6144,75,6240,60,6336,47.5C6432,35,6528,25,6624,20C6720,15,6816,15,6864,15L6912,15L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(141, 88, 187, 1)" offset="0%"></stop>
            <stop stopColor="rgba(141, 88, 187, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
          fill="url(#sw-gradient-1)"
          d="M0,30L48,37.5C96,45,192,60,288,57.5C384,55,480,35,576,35C672,35,768,55,864,62.5C960,70,1056,65,1152,62.5C1248,60,1344,60,1440,70C1536,80,1632,100,1728,110C1824,120,1920,120,2016,110C2112,100,2208,80,2304,77.5C2400,75,2496,90,2592,97.5C2688,105,2784,105,2880,110C2976,115,3072,125,3168,107.5C3264,90,3360,45,3456,35C3552,25,3648,50,3744,72.5C3840,95,3936,115,4032,112.5C4128,110,4224,85,4320,62.5C4416,40,4512,20,4608,27.5C4704,35,4800,70,4896,82.5C4992,95,5088,85,5184,70C5280,55,5376,35,5472,25C5568,15,5664,15,5760,15C5856,15,5952,15,6048,30C6144,45,6240,75,6336,82.5C6432,90,6528,75,6624,60C6720,45,6816,30,6864,22.5L6912,15L6912,150L6864,150C6816,150,6720,150,6624,150C6528,150,6432,150,6336,150C6240,150,6144,150,6048,150C5952,150,5856,150,5760,150C5664,150,5568,150,5472,150C5376,150,5280,150,5184,150C5088,150,4992,150,4896,150C4800,150,4704,150,4608,150C4512,150,4416,150,4320,150C4224,150,4128,150,4032,150C3936,150,3840,150,3744,150C3648,150,3552,150,3456,150C3360,150,3264,150,3168,150C3072,150,2976,150,2880,150C2784,150,2688,150,2592,150C2496,150,2400,150,2304,150C2208,150,2112,150,2016,150C1920,150,1824,150,1728,150C1632,150,1536,150,1440,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
        ></path>
      </svg>
      <div className={styles.bg}>
        <div className={styles.container}>
          <div className={styles.col}>
            <Link href="/">
              <a>
                <div className={styles.logo}>
                  <Logo fill="white" />
                  <h2>Layout</h2>
                </div>
              </a>
            </Link>
            <div className={styles.icons}>
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
          <div className={styles.col}>
            <p className={styles.header}>Support</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>
          <div className={styles.col}>
            <p className={styles.header}>Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className={styles.col}>
            <p className={styles.pushRight}>
              <Link href="https://www.jaden-watson.com">
                <a>Designed & developed by Jaden 🤙</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
