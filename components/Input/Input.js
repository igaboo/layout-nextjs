import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.scss";
import { useState } from "react";

export default function Input({ placeholder, icon, type }) {
  const [value, setValue] = useState("");

  return (
    <>
      <div
        className={type === "password" ? styles.passwordInput : styles.input}
      >
        <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        {type === "password" && (
          <div className={styles.toggleContainer}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        )}
      </div>
    </>
  );
}
