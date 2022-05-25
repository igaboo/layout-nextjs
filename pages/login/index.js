import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faChevronRight,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../../components/Input/Input";
import Link from "next/link";
import { Logo } from "../../components/Svg";
import styles from "./login.module.scss";

export default function index() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <header>
            <Link href="/">
              <a>
                <div className={styles.logo}>
                  <Logo />
                  <h2>Layout</h2>
                </div>
              </a>
            </Link>
          </header>
          <div className={styles.body}>
            <h1>
              Welcome back to <span className="highlight">your</span> portfolio
            </h1>
            <p>
              Don't have an account?{" "}
              <Link href="/signup">
                <a>Sign up here.</a>
              </Link>
            </p>
            <div className={styles.buttons}>
              <Input placeholder="Email" type="email" icon={faEnvelope} />
              <Input placeholder="Password" type="password" icon={faLock} />
            </div>
            <p className={styles.alignRight}>Forgot your password?</p>
          </div>
          <footer>
            <button className="btn-i">
              Login <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className={styles.altButtons}>
              <button className="btn-i">
                Login with Apple <FontAwesomeIcon icon={faApple} />
              </button>
              <button className="btn-i">
                Login with Google <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
