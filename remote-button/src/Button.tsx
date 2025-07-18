import { useState } from "react";
import styles from "./Button.module.css";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles["card-border"]}>
      <div className={styles.card}>
        <h2>Button</h2>
        <p>This is a Button from remote-button app</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default Button;
