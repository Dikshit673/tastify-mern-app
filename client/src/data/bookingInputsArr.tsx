import { BookingFormKeysType } from '@/types/Booking';
import { InputItemType, InputTagType, InputType } from '@/types/Input';

interface BookingItemType extends InputItemType {
  type: InputType;
  name: BookingFormKeysType;
  isInput?: InputTagType;
}

const bookingInputsArr: BookingItemType[] = [
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
    type: 'tel',
    name: 'phone',
    label: 'Phone',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-4',
    type: 'datetime-local',
    name: 'datetime',
    label: 'Date & Time',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-5',
    type: 'text',
    name: 'guests',
    label: 'Guests',
    placeholder: '',
    required: true,
  },
  {
    id: 'field-6',
    type: 'text',
    name: 'message',
    label: 'Special Request',
    placeholder: '',
    required: false,
    isInput: 'textarea',
  },
];

export { bookingInputsArr };
