import React from 'react';
import { TextareaPropsInterface } from './interface';

const Index:React.FC<TextareaPropsInterface> = ({
  placeholder,
  icon,
  name,
  value,
  formik,
}) => {
  const hanldeChange = (e:string):void => {
    formik?.setFieldValue(name, e);
  };

  return (
    <div>
      <div className={`py-2 px-4 rounded mt-2 flex items-center border ${formik?.errors[name] && formik?.touched[name] && 'border-2 border-red-500'}`}>
        {
          icon && icon
        }
        <textarea placeholder={placeholder} className={`text-sm focus:outline-none flex-1 ${icon && 'ml-2'}`} name={name} value={value} onChange={(e) => hanldeChange(e.target.value)} autoComplete="false" autoCorrect="false" />
      </div>
      {
        formik?.errors[name] && formik?.touched[name] && (<p className="text-red-600 text-xs">{ formik?.errors[name] }</p>)
      }
    </div>
  );
};

export default Index;
