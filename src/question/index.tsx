import React from "react";
import { IQuestion, QuestionTypeEnum } from "../types";
import QuestionText from "./Text";
import QuestionRadio from "./Radio";
import QuestionCheckbox from "./Checkbox";
import QuestionDropdown from "./Dropdown";
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

const Question: React.FC<IQuestion> = (props) => {
  const { type } = props;
  if (type === QuestionTypeEnum.text) return <QuestionText {...props} />;
  if (type === QuestionTypeEnum.radiogroup) return <QuestionRadio {...props} />;
  if (type === QuestionTypeEnum.checkbox) return <QuestionCheckbox {...props} />;
  if (type === QuestionTypeEnum.dropdown) return <QuestionDropdown {...props} />;
  return null;
};
export default Question;
