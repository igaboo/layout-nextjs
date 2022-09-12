import { getDownloadURL, ref } from "firebase/storage";
import { useContext, useState } from "react";

import { FadeLoader } from "react-spinners";
import { UserContext } from "../../lib/UserContext";
import { storage } from "../../lib/firebase";
import styles from "./CollectionCard.module.scss";

export default function Collection({ collection, size }) {
  const { currentUser } = useContext(UserContext);

  const [src, setSrc] = useState("");
  const [loading, setLoading] = useState(true);

  const pathRef = ref(
    storage,
    `userData/${currentUser.uid}/${collection.data.images[0]}`
  );

  getDownloadURL(pathRef).then((url) => {
    setSrc(url);
    setLoading(false);
  });

  if (size === "List") {
    return (
      <div className={styles.List}>
        <h6>{collection.data.title}</h6>
        <p>{collection.data.images.length} photos</p>
      </div>
    );
  }

  if (size === "Minimal") {
    return (
      <div className={styles.Minimal}>
        {loading ? (
          <div className={styles.loadingContainer}>
            <FadeLoader
              color={"#999"}
              loading={loading}
              height={13}
              width={5}
              margin={-2}
            />
          </div>
        ) : (
          <>
            <div className={styles.col}>
              <h6>{collection.data.title}</h6>
              <p>{collection.data.images.length} photos</p>
            </div>
            <div className={styles.imageContainer}>
              <img src={src} className={styles.collectionImage}></img>
            </div>
          </>
        )}
      </div>
    );
  }

  if (size === "Gallery") {
    return (
      <div className={styles.Gallery}>
        {loading ? (
          <div className={styles.loadingContainer}>
            <FadeLoader
              color={"#999"}
              loading={loading}
              height={13}
              width={5}
              margin={-2}
            />
          </div>
        ) : (
          <>
            <div className={styles.imageContainer}>
              {collection.data.images.map((image, index) => {
                return <Image image={image} />;
              })}
            </div>
            <div className={styles.col}>
              <h6>{collection.data.title}</h6>
              <p>{collection.data.images.length} photos</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

function Image({ image }) {
  const { currentUser } = useContext(UserContext);
  const [src, setSrc] = useState();

  const pathRef = ref(storage, `userData/${currentUser.uid}/${image}`);

  getDownloadURL(pathRef).then((url) => setSrc(url));

  return (
    <>
      {!src ? (
        <div className={styles.skeleton}></div>
      ) : (
        <div className={styles.collectionImage}>
          <img src={src} />
        </div>
      )}
    </>
  );
}
