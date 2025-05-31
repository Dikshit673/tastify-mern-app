export type InputItemType = {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

export type InputType =
  | 'text'
  | 'email'
  | 'tel'
  | 'datetime-local'
  | 'password';

export type InputTagType = 'input' | 'textarea';
