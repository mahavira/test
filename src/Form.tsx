import React from "react";
import { Button, Form } from "antd";
import questions from "./data.json";
import Question from "./question";
import { IQuestion } from "./types";
import styles from "./style.module.scss";

const SurveyForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = () => {};
  return (
    <Form
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
      layout="vertical"
      className={styles.form}
    >
      {(questions as IQuestion[]).map((item, index) => <Question key={index} {...item} index={index} />)}
      <div className={styles.footer}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};
export default SurveyForm;
