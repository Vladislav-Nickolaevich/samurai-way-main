import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <>
        <h3>Login</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default Login;