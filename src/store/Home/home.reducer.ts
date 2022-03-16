/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomeState } from './home.interface';
import { Dispatches } from '../../constant';

const initialState: HomeState = {
  params: '',
};

type Actions = { type: string, payload: any; };

const homeReducers = (state = initialState, action: Actions):any => {
  const { type, payload } = action;
  switch (type) {
    case Dispatches.SET_PARAMS_HOME:
      return {
        ...state,
        params: payload,
      };
    default:
      return state;
  }
};

export default homeReducers;
