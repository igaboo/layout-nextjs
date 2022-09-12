import styles from "./Tooltip.module.scss";

export default function Tooltip({ children, tooltip, side }) {
  return (
    <span className={styles.container}>
      <span className={styles.hover}>{children}</span>
      <span className={styles[side]}>
        <p>{tooltip}</p>
      </span>
    </span>
  );
}
