import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Logo } from "../Svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.bg}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <Logo />
              <h2>Layout</h2>
            </div>
          </a>
        </Link>

        <ul>
          <li>
            <h2>
              <FontAwesomeIcon icon={faBars} />
            </h2>
          </li>
          <li>
            <Link href="/examples">
              <a>
                <h5>Examples</h5>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/preview">
              <a>
                <h5>Preview Your Own</h5>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>
                <h5>Login</h5>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <a className="btn">Sign Up</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
