export enum QuestionTypeEnum {
  text = "text",
  radiogroup = "radiogroup",
  checkbox = "checkbox",
  dropdown = "dropdown",
  // cascader = 'cascader',
  // textarea = 'textarea',
  // multiText = 'multi_text',
  // date = 'date',
  // time = 'time',
  // star = 'star',
  // nps = 'nps',
  // matrixRadio = 'matrix_radio',
}

export interface IQuestion {
  index: number;
  type: QuestionTypeEnum;
  name: string;
  visibleIf?: string;
  choices?: ChoiceElement[];
  columns?: ColumnElement[];
  rows?: string[];
  optionsCaption?: string;
  cellType?: string;
  items?: string[];
}

export type ChoiceElement = number | string;

export type ColumnElement = ColumnClass | string;

export interface ColumnClass {
  name: string;
  cellType?: string;
}

export interface Item {
  name: string;
}
