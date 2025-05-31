import { InputItemType, InputTagType, InputType } from '@/types/Input';
import { SignUpFormKeysType } from '../types';

interface SignupItemType extends InputItemType {
  type: InputType;
  name: SignUpFormKeysType;
  isInput?: InputTagType;
}

export const SignupFormFields: SignupItemType[] = [
  {
    id: 'field-1',
    name: 'name',
    type: 'text',
    label: 'Name',
    required: true,
  },
  {
    id: 'field-2',
    name: 'email',
    type: 'email',
    label: 'Email',
    required: true,
  },
  {
    id: 'field-3',
    name: 'password',
    type: 'password',
    label: 'Password',
    required: true,
  },
];
