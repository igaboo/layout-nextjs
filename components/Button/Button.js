import Tooltip from "../Tooltip/Tooltip";
import styles from "./Button.module.scss";

export default function Button({ buttons, view, setView }) {
  return (
    <div className={styles.container}>
      {buttons.map((button, index) => {
        return (
          <Tooltip tooltip={button.view} side="bottom">
            <button
              className={view === button.view && styles.active}
              key={index}
              onClick={() => setView(button.view)}
            >
              {button.icon}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}
