import * as yup from 'yup';	

export const schema = yup.object({
  nombre: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  
});