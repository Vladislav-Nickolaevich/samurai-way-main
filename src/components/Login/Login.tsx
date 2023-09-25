import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {loginTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

const LoginForm: FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={required}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={required}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    name={'rememberMe'}
                    type={'checkbox'}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const Login = (props: LoginType ) => {
    const {isAuth, loginTC} = props
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData)
    }
    if(isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <>
        <h3>Login</h3>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default  connect(mapStateToProps, {loginTC})(Login);



export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    loginTC: (formData: FormDataType) => void
    isAuth: boolean
}
