import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../scss/ColorSelector.module.scss";

const ColorSelector = ({ color, colorSelected, setColorSelected }) => {
  const renderClassColorBtn = (col) => {
    if (col === "gold" && color[colorSelected] === "gold") {
      return styles.gold_active;
    } else if (col === "silver" && color[colorSelected] === "silver") {
      return styles.silver_active;
    } else if (col === "gold" && color[colorSelected] !== "gold") {
      return styles.gold;
    } else if (col === "silver" && color[colorSelected] !== "silver") {
      return styles.silver;
    }
  };
  return (
    <div className={styles.colorSelector_container}>
      <div className={styles.selector}>
        {color.map((col, i) => {
          return (
            <button
              key={col}
              className={renderClassColorBtn(col)}
              onClick={() => setColorSelected(i)}
            >
              <FontAwesomeIcon icon={faCircle} />
            </button>
          );
        })}
      </div>
      <p className={styles.description}>24k gold</p>
    </div>
  );
};

export default ColorSelector;
