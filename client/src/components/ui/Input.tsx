import { cn } from '@/lib/utils';
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'tel' | 'datetime-local' | 'password';
  className?: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = memo(
  ({
    type,
    id,
    name,
    label,
    placeholder = '',
    required = false,
    value,
    handleChange,
  }) => {
    return (
      <div className='relative'>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          autoComplete={type !== 'password' ? 'on' : 'off'}
          className='peer h-full w-full rounded-md border border-gray-500 bg-white px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900'
        />
        <label
          htmlFor={id}
          className={cn(
            'font-nunito absolute left-3 inline-block -translate-y-1/2 rounded-lg bg-white px-1 text-sm font-medium text-black capitalize opacity-100 transition-all duration-100 ease-in peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-500'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextareaProps> = memo(
  ({
    id,
    name,
    label,
    placeholder = '',
    required = false,
    value,
    handleChange,
  }) => {
    return (
      <div className='relative'>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={handleChange}
          className='peer h-30 w-full resize-none rounded-md border border-gray-500 px-4 py-2 outline-none focus:ring-2 focus:ring-gray-900'
        />
        <label
          htmlFor={id}
          className={cn(
            'absolute left-3 inline-block -translate-y-1/2 bg-white px-1 text-sm capitalize transition-all duration-100 ease-in peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-gray-500'
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

export { Input, TextArea };
