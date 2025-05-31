import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react';
import { Input, TextArea } from './Input';
import { InputTagType, InputType } from '@/types/Input';

interface FieldConfig<T extends Record<string, string>> {
  id: string;
  type: InputType;
  name: keyof T;
  placeholder?: string;
  label: string;
  required?: boolean;
  isInput?: InputTagType;
}

interface FormPresenterProps<T extends Record<string, string>> {
  formName: string;
  arr: Array<FieldConfig<T>>;
  fields: T;
  setFields: Dispatch<SetStateAction<T>>;
}

const FormPresenter = <T extends Record<string, string>>({
  formName,
  arr,
  fields,
  setFields,
}: FormPresenterProps<T>) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFields((prev) => ({ ...prev, [name]: value }));
    },
    [setFields]
  );

  const handleTextAreaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFields((prev) => ({ ...prev, [name]: value }));
    },
    [setFields]
  );

  return (
    <div className='grid grid-cols-1 gap-5'>
      {arr.map(
        ({
          id,
          type,
          name,
          label,
          placeholder = '',
          required = false,
          isInput = 'input',
        }) =>
          isInput !== 'input' ? (
            <TextArea
              key={id}
              type={type}
              id={`${formName}-${id}`}
              name={name as string}
              label={label}
              placeholder={placeholder}
              required={required}
              value={fields[name] ?? ''}
              handleChange={handleTextAreaChange}
            />
          ) : (
            <Input
              key={id}
              type={type}
              id={`${formName}-${id}`}
              name={name as string}
              placeholder={placeholder}
              label={label}
              required={required}
              value={fields[name] ?? ''}
              handleChange={handleInputChange}
            />
          )
      )}
    </div>
  );
};

export { FormPresenter };
