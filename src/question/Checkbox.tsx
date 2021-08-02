import React from "react";
import { Form, Checkbox, Space } from "antd";
import { IQuestion } from "../types";
import Title from "./Title";

const QuestionRadio: React.FC<IQuestion> = (props) => {
  const { index, choices } = props;

  return (
    <Form.Item
      key={index}
      name={`Q${index}`}
      label={<Title {...props} />}
    >
      <Checkbox.Group style={{paddingLeft: 40}}>
        <Space direction="vertical">
          {choices?.map((item => <Checkbox key={item} value={item}>{item}</Checkbox>))}
        </Space>
      </Checkbox.Group>
    </Form.Item>
  );
};
export default QuestionRadio;
