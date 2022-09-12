import { Gallery, List, Minimal } from "../../../components/Svg";
import { useContext, useState } from "react";

import Button from "../../../components/Button/Button";
import Collection from "../../../components/CollectionCard/CollectionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { UserContext } from "../../../lib/UserContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./collections.module.scss";

export default function Collections() {
  const { collections } = useContext(UserContext);

  const [view, setView] = useState("Gallery");

  return (
    <div className={styles.container}>
      <header>
        <h1>Collections</h1>
        <h4>Use collections to organize your photos into groups.</h4>
      </header>
      <div className={styles.subContainer}>
        <header>
          <h6>
            Collections{" "}
            <span>
              <Link href="/dashboard/collections">
                <a>
                  Showing {collections.length}{" "}
                  {collections.length === 1 ? "collection" : "collections"}
                </a>
              </Link>
            </span>
          </h6>
          <h6>
            <Button
              buttons={[
                { icon: <Gallery />, view: "Gallery" },
                { icon: <Minimal />, view: "Minimal" },
                { icon: <List />, view: "List" },
              ]}
              view={view}
              setView={setView}
            />
          </h6>
          <h6>
            <button className="btn-inline">
              Create Collection <FontAwesomeIcon icon={faPlus} />
            </button>
          </h6>
        </header>
        <main className={styles[view]}>
          {collections.map((collection, index) => {
            return (
              <Collection key={index} collection={collection} size={view} />
            );
          })}
        </main>
      </div>
    </div>
  );
}
