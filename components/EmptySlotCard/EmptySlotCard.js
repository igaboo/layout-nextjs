import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./EmptySlotCard.module.scss";

export default function EmptySlot({ slot }) {
  return (
    <button className={styles.card}>
      <h6>
        <FontAwesomeIcon icon={faPlus} />
      </h6>
      <h6>Slot {slot}</h6>
    </button>
  );
}
