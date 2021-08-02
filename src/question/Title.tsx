import React from "react";
import { IQuestion } from "../types";
import styles from "../style.module.scss";

const QuestionLabel: React.FC<IQuestion> = ({ index, name }) => {
  return (
    <h3 className={styles.title}>
      <span className={styles.num}>{index + 1}</span>
      <span className={styles.text}>{name}</span>
    </h3>
  );
};
export default QuestionLabel;
