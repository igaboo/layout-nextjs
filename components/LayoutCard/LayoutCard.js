import styles from "./LayoutCard.module.scss";

export default function Layout({ layout }) {
  return (
    <div className={styles.card}>
      <h6>{layout.data.title}</h6>
      <p>{layout.data.date.toDate().toLocaleDateString()}</p>
      <div className={styles.layoutPreview}></div>
    </div>
  );
}
