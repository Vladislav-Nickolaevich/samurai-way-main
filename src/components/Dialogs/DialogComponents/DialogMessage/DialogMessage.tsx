import React, {FC} from 'react';
import s from "../../Dialogs.module.css";
import {messageType} from "../../Dialogs";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLength100 = maxLength(100)

export const DialogMessage = (props: DialogMessageType) => {
    const {posts, addMessageText} = props
    const addMessage = (text: string) => {
        if (text.trim() !== '') {
            addMessageText(text)
        }
    }

    const onSubmit = (mes: AddMessageDialogType) => {
        addMessage(mes.MessageDialogs)
    }
    return (
        <div className={s.messages}>
            {posts.map(d => {
                return (
                    <div className={s.message} key={d.id}>
                        {d.message}
                    </div>
                )
            })}
            <AddMessageFormRedux onSubmit={onSubmit}/>
        </div>
    )
};


const AddNewMyPostForm: FC<InjectedFormProps<AddMessageDialogType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'MessageDialogs'}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>

    )
}
const AddMessageFormRedux = reduxForm<AddMessageDialogType>({form: 'AddMessageForm'})(AddNewMyPostForm)


type DialogMessageType = {
    posts: messageType[]
    addMessageText: (text: string) => void
}
type AddMessageDialogType = {
    MessageDialogs: string
}