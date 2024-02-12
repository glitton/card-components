import React from "react";

import styles from "./Card.module.css";

function Card({ children, elevation }) {
  const boxShadow = `var(--elevation-${elevation})`;
  return (
    <div className={styles.card} style={{ boxShadow }}>
      {children}
    </div>
  );
}

export default Card;
