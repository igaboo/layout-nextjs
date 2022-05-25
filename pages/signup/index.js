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
import styles from "./signup.module.scss";

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
              The first step to a <span className="highlight">stronger</span>{" "}
              portfolio
            </h1>
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <a>Login here.</a>
              </Link>
            </p>
            <div className={styles.buttons}>
              <Input placeholder="Email" type="email" icon={faEnvelope} />
              <Input placeholder="Password" type="password" icon={faLock} />
            </div>
          </div>
          <footer>
            <button className="btn-i">
              Sign Up <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <div className={styles.altButtons}>
              <button className="btn-i">
                Sign up with Apple <FontAwesomeIcon icon={faApple} />
              </button>
              <button className="btn-i">
                Sign up with Google <FontAwesomeIcon icon={faGoogle} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
