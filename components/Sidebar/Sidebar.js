import {
  faCamera,
  faGear,
  faImage,
  faLayerGroup,
  faMagnifyingGlass,
  faTableCells,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Logo } from "../Svg";
import Tooltip from "../Tooltip/Tooltip";
import { UserContext } from "../../lib/UserContext";
import styles from "./Sidebar.module.scss";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();

  const { logout } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Tooltip tooltip="Home" side="right">
        <Link href="/">
          <a>
            <header>
              <Logo />
            </header>
          </a>
        </Link>
      </Tooltip>
      <div className={styles.body}>
        <Tooltip tooltip="Dashboard" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard" && styles.active
            }`}
          >
            <Link href="/dashboard">
              <a>
                <FontAwesomeIcon icon={faTableCells} />
              </a>
            </Link>
          </div>
        </Tooltip>
        <Tooltip tooltip="Search" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard/search" && styles.active
            }`}
          >
            <Link href="/dashboard/search">
              <a>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </Link>
          </div>
        </Tooltip>
        <Tooltip tooltip="Discover" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard/discover" && styles.active
            }`}
          >
            <Link href="/dashboard/discover">
              <a>
                <FontAwesomeIcon icon={faCamera} />
              </a>
            </Link>
          </div>
        </Tooltip>

        <hr />
        <Tooltip tooltip="Gallery" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard/gallery" && styles.active
            }`}
          >
            <Link href="/dashboard/gallery">
              <a>
                <FontAwesomeIcon icon={faImage} />
              </a>
            </Link>
          </div>
        </Tooltip>
        <Tooltip tooltip="Collections" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard/collections" && styles.active
            }`}
          >
            <Link href="/dashboard/collections">
              <a>
                <FontAwesomeIcon icon={faLayerGroup} />
              </a>
            </Link>
          </div>
        </Tooltip>

        <hr />
        <Tooltip tooltip="Settings" side="right">
          <div
            className={`${styles.button} ${
              router.pathname === "/dashboard/settings" && styles.active
            }`}
          >
            <Link href="/dashboard/settings">
              <a>
                <FontAwesomeIcon icon={faGear} />
              </a>
            </Link>
          </div>
        </Tooltip>
      </div>
      <Tooltip tooltip="Account" side="right">
        <footer className={styles.button} onClick={() => logout()}>
          <FontAwesomeIcon icon={faUser} />
        </footer>
      </Tooltip>
    </div>
  );
}
