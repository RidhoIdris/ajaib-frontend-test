import React from 'react';

interface ButtonInterface extends React.HTMLProps<HTMLButtonElement>{
  label : string
}

const MyButton:React.FC<ButtonInterface> = ({
  label,
  ...props
}) => (
  <button {...props} type="button" className="!py-2 !px-4 !bg-indigo-100 !rounded text-indigo-500 hover:!bg-indigo-200 font-semibold ">{label}</button>
);

export default MyButton;
