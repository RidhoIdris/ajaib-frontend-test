import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../helpers';
import homeAction from '../../../store/Home/home.action';
import MyButton from '../Button';
import MySelect from '../MySelect';
// import { FilterPluginInterface } from './interface';

const FilterPluginComponent = () => {
  const dispatch = useAppDispatch();
  const homeState = useAppSelector((state) => state.home);

  return (
    <div className="flex items-center px-2 space-x-2">
      <div className="w-64">
        <MySelect placeholder="Select Gender" value={homeState.params} name="gender" onchange={(e) => dispatch(homeAction.setParams(e))} />
      </div>
      <MyButton onClick={() => dispatch(homeAction.setParams(''))} label="Reset Filter" />
    </div>
  );
};
function compare(prevProps:any, nextProps:any) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export const FilterPlugin = React.memo(FilterPluginComponent, compare);

export default FilterPlugin;
