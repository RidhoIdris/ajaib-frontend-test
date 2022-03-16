import { API } from '../../helpers';

interface bodyRegisterInterface {
  phone: string;
  password: string;
  country: string;
  latlong: string;
  device_token: string;
  device_type: string;
}

export default {
  register: (body: bodyRegisterInterface):any => {
    try {
      const response = API.post('/register', { ...body }, false);
      console.log('response ==> ', response);
    } catch (error) {
      console.log(error);
    }
  },

};
