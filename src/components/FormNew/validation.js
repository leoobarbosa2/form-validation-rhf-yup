import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
    email: yup.string().email('Please type a valid email using @').required('Email is required'),
    password: yup.string().min(4, 'Please type a password with at least 4 digits').required('A password is required')
}).required();

