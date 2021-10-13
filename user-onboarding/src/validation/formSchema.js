import * as yup from 'yup';
import { boolean } from 'yup/lib/locale';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is a required field.')
        .min(3, 'Username must include 3 or more characters.'),
    email: yup
        .string()
        .email('Must be a valid email address.')
        .required('Email is Required.'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(6, 'Password must include 6 or more characters.')
        .matches(/[a-zA-Z]/, 'Password can only contain letters.'),
    terms: yup.boolean(),
});

export default formSchema;