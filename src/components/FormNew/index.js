import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from './validation';

import Field from "../Field";
import Form from "../Form";
import Button from "../Button";

const FormNew = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });

    const onSubmit = (data) => console.log(data)

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Field.Text 
                label="Email" 
                name="email"  
                type="email"
                register={register}
            />
            <p>{errors.email?.message}</p>
             <Field.Text 
                label="Password" 
                name="password"  
                type="password"
                register={register}
            />
            <p>{errors.password?.message}</p>
                <Button type="submit">
                    Validate
                </Button>
        </Form>
    )
}

export default FormNew;