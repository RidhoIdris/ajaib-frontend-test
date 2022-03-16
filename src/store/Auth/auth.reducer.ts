/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserState } from './auth.interface';
import { Dispatches } from '../../constant';

const initialState: UserState = {
  token: null,
  meta: {
    latlong: null,
    device_token: null,
    device_type: null,
  },
  user: {
    id: null,
    phone: null,
  },
};

type Actions = { type: string, payload: any; };

const authReducers = (state = initialState, action: Actions):any => {
  const { type, payload } = action;
  switch (type) {
    case Dispatches.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case Dispatches.SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          payload,
        },
      };
    default:
      return state;
  }
};

export default authReducers;
