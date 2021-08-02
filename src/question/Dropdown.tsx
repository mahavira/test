
import React from "react";
import { Form, Select } from "antd";
import { IQuestion } from "../types";
import Title from "./Title";

const QuestionDropdown: React.FC<IQuestion> = (props) => {
  const { index, choices } = props;
  if (!choices) return null;
  const options = choices.map((item) => ({ label: item, value: item }));
  return (
    <Form.Item
      key={index}
      name={`Q${index}`}
      label={<Title {...props} />}
      valuePropName="checked"
    >
      <Select options={options} style={{paddingLeft: 40}}></Select>
    </Form.Item>
  );
};
export default QuestionDropdown;
