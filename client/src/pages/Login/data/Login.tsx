import { InputItemType, InputTagType, InputType } from '@/types/Input';
import { LoginFormKeysType } from '../types';

interface LoginItemType extends InputItemType {
  type: InputType;
  name: LoginFormKeysType;
  isInput?: InputTagType;
}

export const LoginFormFields: LoginItemType[] = [
  {
    id: 'field-1',
    name: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    placeholder: '',
  },
  {
    id: 'field-2',
    name: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    placeholder: '',
  },
];
