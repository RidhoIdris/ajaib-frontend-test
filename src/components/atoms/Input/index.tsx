/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { InputPropsInterface } from './interface';

const Index:React.FC<InputPropsInterface> = ({
  placeholder,
  isPassword,
  icon,
  name,
  value,
  formik,
  isNumber,
  isDate,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const hanldeChange = (e:string):void => {
    if (isNumber) {
      formik?.setFieldValue(name, e.replace(/\D/, ''));
    } else {
      formik?.setFieldValue(name, e);
    }
  };

  return (
    <div className="w-full">
      <div className={`py-2 px-4 rounded mt-2 flex items-center border ${formik?.errors[name] && formik?.touched[name] && 'border-2 border-red-500'}`}>
        {
          icon && icon
        }
        <input name={name} value={value} onChange={(e) => hanldeChange(e.target.value)} autoComplete="false" autoCorrect="false" className={`text-sm focus:outline-none placeholder-gray-500 flex-1 ${icon && 'ml-2'}`} type={(isPassword && !showPassword) ? 'password' : isDate ? 'date' : 'text'} placeholder={placeholder} />
        {
          isPassword && (showPassword ? <FiEye onClick={() => setShowPassword(!showPassword)} /> : <FiEyeOff onClick={() => setShowPassword(!showPassword)} />)
        }
      </div>
      {
        formik?.errors[name] && formik?.touched[name] && (<p className="text-red-600 text-xs">{ formik?.errors[name] }</p>)
      }
    </div>
  );
};

export default Index;
