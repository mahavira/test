import React from "react";
import { Form, Radio, Space } from "antd";
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
      <Radio.Group style={{paddingLeft: 40}}>
        <Space direction="vertical">
          {choices?.map((item => <Radio key={item} value={item}>{item}</Radio>))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};
export default QuestionRadio;
