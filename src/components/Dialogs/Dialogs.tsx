import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {v1} from "uuid";

type DialogType = {
    id: string
    userName: string
    message: string
}
const obj: DialogType[] = [
    {id: v1(),userName: 'Vlad', message: 'Hi'},
    {id: v1(),userName: 'Alex', message: 'What is the best country for travelling?'},
    {id: v1(),userName: 'Katya', message: 'I like country with sea'},
    {id: v1(),userName: 'John', message: 'I want to see interesting places'},

]
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            {/*
            {/*    <div className={s.dialog}>*/}
            {/*        <NavLink to='/dialogs/1'>Vlad</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.dialog}>*/}
            {/*        <NavLink to='/dialogs/2'>Alex</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.dialog + ' ' + s.active}>*/}
            {/*        <NavLink to='/dialogs/3'>Katya</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className={s.dialog}>*/}
            {/*        <NavLink to='/dialogs/4'>John</NavLink>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={s.dialogsItems}>
            { obj.map(el => {
                return (
                    <div key={el.id} className={s.dialog}>
                        <NavLink to={'/dialogs/'+ el.id}>{el.userName}</NavLink>
                    </div>
                )
            })}
            </div>
            <div className={s.messages}>
                {obj.map(el => {
                    return (
                        <div className={s.message} key={el.id}>
                            {el.message}
                        </div>
                    )
                })}
                {/*<div className={s.message}>Hi</div>*/}
                {/*<div className={s.message}>What is the best country for travelling?</div>*/}
                {/*<div className={s.message}>I like country with sea</div>*/}
                {/*<div className={s.message}>I want to see interesting places</div>*/}
            </div>
        </div>
    );
};

export default Dialogs;