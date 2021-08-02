import React from "react";
import { Form, Input } from "antd";
import { IQuestion } from "../types";
import Title from "./Title";

const QuestionText: React.FC<IQuestion> = (props) => {
  const { index } = props;
  return <Form.Item
      key={index}
      name={`Q${index}`}
      label={<Title {...props} />}
      required
    >
    <div style={{paddingLeft: 40}}>
      <Input  />
    </div>
  </Form.Item>
};
export default QuestionText;
