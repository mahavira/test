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

const maps = {
  [QuestionTypeEnum.text]: QuestionText,
  [QuestionTypeEnum.radiogroup]: QuestionRadio,
  [QuestionTypeEnum.checkbox]: QuestionCheckbox,
  [QuestionTypeEnum.dropdown]: QuestionDropdown,
  // [QuestionTypeEnum.textarea]: QuestionTextarea,
  // [QuestionTypeEnum.date]: QuestionDate,
  // [QuestionTypeEnum.time]: QuestionTime,
  // [QuestionTypeEnum.star]: QuestionStar,
  // [QuestionTypeEnum.nps]: QuestionNps,
  // [QuestionTypeEnum.upload]: QuestionUpload,
  // [QuestionTypeEnum.cascader]: QuestionCascader,
  // [QuestionTypeEnum.multiText]: QuestionMultiText,
  // [QuestionTypeEnum.matrixRadio]: QuestionMatrixRadio,
  // [QuestionTypeEnum.questions]: QuestionTextarea,
};

const Question: React.FC<IQuestion> = (props) => {
  if (!maps[props.type]) return null;
  return React.createElement(maps[props.type], props);
};
export default Question;
