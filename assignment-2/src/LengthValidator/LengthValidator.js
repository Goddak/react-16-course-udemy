import React from "react";
import styles from "./LengthValidator.module.css";

console.log(styles);

function LengthValidator(props) {
  let outcome =
    props.value > 5
      ? "The text you entered is long enough!"
      : "Fucked it Fred!";

  return (
    <div className={styles.lengthValidator}>
      <p>{outcome}</p>
    </div>
  );
}

export default LengthValidator;
