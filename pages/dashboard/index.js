import { getDownloadURL, ref } from "firebase/storage";
import { useContext, useState } from "react";

import Collection from "../../components/CollectionCard/CollectionCard";
import EmptySlot from "../../components/EmptySlotCard/EmptySlotCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/LayoutCard/LayoutCard";
import Link from "next/link";
import { UserContext } from "../../lib/UserContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./dashboard.module.scss";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { currentUser, layouts, collections } = useContext(UserContext);

  const router = useRouter();

  const layoutEmptySlots = [];
  for (var i = 0; i < 3 - layouts.length; i++) {
    layoutEmptySlots.push(layouts.length + i + 1);
  }

  const collectionEmptySlots = [];
  for (var i = 0; i < 3 - collections.length; i++) {
    collectionEmptySlots.push(collections.length + i + 1);
  }

  if (!currentUser) router.replace("/login");

  return (
    <>
      {currentUser && (
        <div className={styles.container}>
          <h1>Dashboard</h1>
          <div className={styles.subContainer}>
            <header>
              <h6>
                Layouts <span>{layouts.length}</span>
              </h6>
              <h6>
                <button className="btn-inline">
                  Create new Layout <FontAwesomeIcon icon={faPlus} />
                </button>
              </h6>
            </header>
            <div className={styles.cardContainer}>
              {layouts.map((layout, index) => {
                return <Layout key={index} layout={layout} />;
              })}
              {layoutEmptySlots.map((slot) => {
                return <EmptySlot slot={slot} />;
              })}
            </div>
          </div>
          <div className={styles.subContainer}>
            <header>
              <h6>
                Collections{" "}
                <span>
                  <Link href="/dashboard/collections">View All</Link>
                </span>
              </h6>
              <h6>
                <button className="btn-inline">
                  Create Collection <FontAwesomeIcon icon={faPlus} />
                </button>
              </h6>
            </header>
            <div className={styles.cardContainer}>
              {collections.map((collection, index) => {
                return (
                  <Collection
                    key={index}
                    collection={collection}
                    size="Minimal"
                  />
                );
              })}
              {collectionEmptySlots.map((slot) => {
                return <EmptySlot slot={slot} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
