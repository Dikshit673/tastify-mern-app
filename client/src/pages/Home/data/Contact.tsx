import { ContactFormKeysType } from '@/pages/Home/types';
import { InputItemType, InputTagType, InputType } from '@/types/Input';

interface ContactItemType extends InputItemType {
  type: InputType;
  name: ContactFormKeysType;
  isInput?: InputTagType;
}

export const ContactFormFields: ContactItemType[] = [
  {
    id: 'field-1',
    type: 'text',
    name: 'name',
    label: 'Name',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-2',
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-3',
    type: 'text',
    name: 'subject',
    label: 'Subject',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-4',
    type: 'text',
    name: 'message',
    label: 'Message',
    placeholder: '',
    required: true,
    isInput: 'textarea',
  },
];
