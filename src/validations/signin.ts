import * as yup from 'yup';

const validateSignin = yup.object().shape({
  phone_number: yup.number().required().label('Phone Number'),
  password: yup.string().required().label('Password'),
});

const validateOtp = yup.object().shape({
  otp: yup.string().min(4).required().label('OTP'),
});

const validateRegister = yup.object().shape({
  phone_number: yup.number().required().label('Phone Number'),
  contry: yup.string().required().label('Contry'),
  password: yup.string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ).label('Password'),
  password_confirmation: yup.string()
    .required()
    .oneOf([yup.ref('password')], 'The password confirmation is not match with password').label('Password Confirmation'),
});

export default {
  validateSignin,
  validateRegister,
  validateOtp,
};
