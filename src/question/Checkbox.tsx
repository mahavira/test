import React from "react";
import { Checkbox } from "antd";
import { IQuestion } from "../types";

const QuestionCheckbox: React.FC<IQuestion> = (props) => {
  return <Checkbox.Group options={props.choices as string[]}></Checkbox.Group>;
};
export default QuestionCheckbox;
