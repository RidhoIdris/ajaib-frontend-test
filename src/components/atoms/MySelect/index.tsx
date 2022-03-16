/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Select from 'react-select';
import { MySelectPropsInterface } from './interface';

const options = [
  { value: '', label: 'All' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];
const MySelect:React.FC<MySelectPropsInterface> = ({
  placeholder,
  name,
  onchange,
  value,
}) => (
  <div className="">
    <Select
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e:any) => {
        onchange(e);
      }}
      options={options}
      styles={{
        control: (styles, { isFocused }) => ({
          ...styles,
          borderWidth: '1px',
          borderRadius: '0.25rem',
          border: `${isFocused ? '1px solid #dee2e6' : '1px solid #dee2e6'}`,
          boxShadow: '0 !important',
          '&:hover': {
            border: `${isFocused ? '1px solid #dee2e6' : '1px solid #dee2e6'}`,
          },
          fontSize: '0.875rem',
        }),
        placeholder: (defaultStyles) => ({
          ...defaultStyles,
          color: 'rgb(107 114 128 / 1)',
        }),
        input: (styles) => ({
          ...styles, paddingTop: '0.40rem', paddingBottom: '0.40rem',
        }),
        menu: (styles) => ({
          ...styles, zIndex: 2,
        }),
      }}
    />
  </div>
);

export default MySelect;
