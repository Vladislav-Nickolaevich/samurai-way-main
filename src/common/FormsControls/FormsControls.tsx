import React, {FC} from 'react';
import styles from './FormsControls.module.css';
import {Field, WrappedFieldProps} from "redux-form";

const FormControl: FC<WrappedFieldProps> = ({meta: {touched, error}, children}) => {
    let hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>{<textarea {...input} {...restProps}/>}</FormControl>
    );
};

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>{<input {...input} {...restProps}/>}</FormControl>
    );
};

export const createForm = (
    placeholder: string | '',
    name: string,
    validate?: (value: string) => any,
    type: string | null = null,
    text: string = ''
) => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={Input}
            validate={validate}
            type={type}
        />
        {text}
    </div>
}
