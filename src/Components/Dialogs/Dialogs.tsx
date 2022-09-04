import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    message: string
}

type DialogItemPropsType = {
    id: number
    name: string
}

const Message = (props: MessagePropsType)=> {
    return <div className={s.message}>{props.message}</div>

}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export const Dialogs = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Taison'} id={1}/>
                <DialogItem name={'Sveta'} id={2}/>
                <DialogItem name={'Valera'} id={3}/>
                <DialogItem name={'Dimych'} id={4}/>
                <DialogItem name={'Victor'} id={5}/>
                <DialogItem name={'Igor'} id={6}/>


                <div className={s.messages}>
                    <div>
                        <Message message={'Hi'}/>
                        <Message message={'How are you?'}/>
                        <Message message={'Good evening!'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

