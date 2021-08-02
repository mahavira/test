import React from "react";
import { Radio } from "antd";
import { IQuestion } from "../types";

const QuestionRadio: React.FC<IQuestion> = (props) => {
  return <Radio.Group options={props.choices as string[]}></Radio.Group>;
};
export default QuestionRadio;
