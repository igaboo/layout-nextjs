import DisplayTypesExample from "../components/DisplayTypesExample/DisplayTypesExample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.col}>
          <h1>
            Display <span className="highlight">your</span> photos the way{" "}
            <span className="highlight">you</span> want.
          </h1>
          <div className={styles.buttons}>
            <Link href="/" className="btn">
              <a className="btn">Create your own</a>
            </Link>
            <Link href="/" className="sub-btn">
              <a className="btn-g">
                <FontAwesomeIcon icon={faEye} />
                Preview
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.col}>
          <DisplayTypesExample />
        </div>
      </div>
      <Footer />
    </div>
  );
}
