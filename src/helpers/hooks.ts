/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  TypedUseSelectorHook, useDispatch, useSelector,
} from 'react-redux';
import type { RootState, AppDispatch } from '../store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useAppDispatch,
  useAppSelector,
};
