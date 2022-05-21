import Link from "next/link";
import Logo from "../Logo";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Logo />
        <h2>Layout</h2>
      </div>
      <ul>
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
    </header>
  );
}

export default Navbar;
