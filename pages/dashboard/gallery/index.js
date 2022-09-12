import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { UserContext } from "../../../lib/UserContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./gallery.module.scss";
import { useContext } from "react";

export default function Gallery() {
  const { images } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <header>
        <h1>Gallery</h1>
        <h4>View, edit, and manage the photos that appear on your Layouts.</h4>
      </header>
      {/* <div className={styles.subContainer}>
        <header>
          <h6>
            Photos{" "}
            <span>
              <Link href="/dashboard/collections">
                <a>
                  Showing {images.length}{" "}
                  {images.length === 1 ? "collection" : "collections"}
                </a>
              </Link>
            </span>
          </h6>
          <h6>
            <button className="btn-inline">
              Upload Photos <FontAwesomeIcon icon={faPlus} />
            </button>
          </h6>
        </header>
      </div> */}
    </div>
  );
}
