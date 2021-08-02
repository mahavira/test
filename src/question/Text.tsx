import React from "react";
import { Input } from "antd";
import { IQuestion } from "../types";

const QuestionText: React.FC<IQuestion> = () => {
  return <Input placeholder="Basic usage" />;
};
export default QuestionText;
