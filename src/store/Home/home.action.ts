import { Dispatches } from '../../constant';

interface Value {
  label:string;
  value:string
}
export default {
  setParams: (payload: Value | '') => ({
    type: Dispatches.SET_PARAMS_HOME,
    payload,
  }),

};
