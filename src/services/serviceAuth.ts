/* eslint-disable consistent-return */
import { toast } from 'react-toastify';
import { API } from '../helpers';

interface bodyRegisterInterface {
  phone: string;
  password: string;
  country: string;
  latlong: string;
  device_token: string;
  device_type: string;
}
export const serviceSignIn = async (data: bodyRegisterInterface) => {
  try {
    const apiFetch = await API.post('/register', { ...data }, false);
    return Promise.resolve(apiFetch);
  } catch (error:any) {
    if (error?.response?.status === 422) {
      toast.error(error.response.data.error.errors[0]);
    } else {
      toast.error('Opsss. Something When Wrong !!!');
    }
    Promise.reject(error);
  }
};
