import React from 'react';
import MySelect from '../MySelect';
import { FilterPluginInterface } from './interface';

const FilterPluginComponent:React.FC<FilterPluginInterface> = ({ setParams, value }) => (
  <div className="flex items-center px-2 space-x-2">
    <div className="w-64">
      <MySelect placeholder="Select Gender" value={value} name="gender" onchange={(e) => setParams(e)} />
    </div>
    <button type="button" onClick={() => setParams('')} className="!py-2 !px-4 !bg-blue-500 !rounded text-white hover:!bg-opacity-75 ">Reset Filter</button>
  </div>
);
function compare(prevProps:any, nextProps:any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export const FilterPlugin = React.memo(FilterPluginComponent, compare);

export default FilterPlugin;
