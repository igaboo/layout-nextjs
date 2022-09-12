import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Logo } from "../Svg";
import Tooltip from "../Tooltip/Tooltip";
import { UserContext } from "../../lib/UserContext";
import styles from "./Navbar.module.scss";
import { useContext } from "react";

export default function Navbar() {
  const { currentUser, logout } = useContext(UserContext);

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
              <Tooltip tooltip="Menu" side="bottom">
                <FontAwesomeIcon icon={faBars} />
              </Tooltip>
            </h2>
          </li>
          {!currentUser && (
            <>
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
                    <h5>Preview Your Layout</h5>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>
                    <a className="btn-g">Login</a>
                  </a>
                </Link>
              </li>
            </>
          )}
          {currentUser && (
            <li className={styles.logout} onClick={() => logout()}>
              <h2>
                <Tooltip tooltip="Logout" side="bottom">
                  <button>
                    <FontAwesomeIcon
                      color="var(--clr-danger)"
                      icon={faArrowRightFromBracket}
                    />
                  </button>
                </Tooltip>
              </h2>
            </li>
          )}
          <li>
            <Link href={currentUser ? "/dashboard" : "/signup"}>
              <a className="btn">{currentUser ? "Dashboard" : "Sign Up"}</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
