import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createForm} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {loginTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import style from './../../common/FormsControls/FormsControls.module.css'

const LoginForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createForm('Email', 'email', required, null, '')}
            {createForm('Password', 'password', required, 'password', '')}
            {createForm('', 'rememberMe', undefined, 'checkbox', 'remember me')}
            {error ?
                <div className={style.formSumError}>{error}</div> :
                ''
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const Login: FC<LoginType> = ({isAuth, loginTC}) => {
    const onSubmit = (formData: FormDataType) => {
        loginTC(formData)
    }
    if (isAuth) {
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
export default connect(mapStateToProps, {loginTC})(Login);


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
type LoginType = {
    loginTC: (formData: FormDataType) => void
    isAuth: boolean
}
