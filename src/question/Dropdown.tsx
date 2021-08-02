import React from "react";
import { Select } from "antd";
import { IQuestion } from "../types";

const QuestionDropdown: React.FC<IQuestion> = (props) => {
  if (!props.choices) return null;
  const options = props.choices.map((item) => ({ label: item, value: item }));
  return <Select options={options}></Select>;
};
export default QuestionDropdown;
