import React from "react";
import { Button, Form, Input } from "antd";
import questions from "./data.json";
import { IQuestion, QuestionTypeEnum } from "./types";
import classs from "./style.module.scss";
// import Question from "./question";
import QuestionText from "./question/Text";
import QuestionRadio from "./question/Radio";
import QuestionCheckbox from "./question/Checkbox";
import QuestionDropdown from "./question/Dropdown";
// import QuestionText from './Text';
// import QuestionTextarea from './Textarea';
// import QuestionDate from './Date';
// import QuestionTime from './Time';
// import QuestionStar from './Star';
// import QuestionNps from './Nps';
// import QuestionUpload from './Upload';
// import QuestionMatrixRadio from './MatrixRadio';
// import QuestionCascader from './Cascader';
// import QuestionMultiText from './MultiText';
// import QuestionRemark from './Remark';
// import QuestionDivider from './Divider';

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
      className={classs.form}
    >
      {(questions as IQuestion[]).map((item, index) => (
        <Form.Item
          key={index}
          name={`Q${index}`}
          label={
            <h3>
              <span>{index + 1}</span>. {item.name}
            </h3>
          }
        >
          {/* <Question {...item} /> */}
          {item.type === QuestionTypeEnum.text && <Input />}
          {/* {maps[item.type] ? React.createElement(maps[item.type], item) : null} */}
        </Form.Item>
      ))}
      <div className={classs.footer}>
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
