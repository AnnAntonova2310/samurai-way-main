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

const Message = (props: MessagePropsType) => {
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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Taison'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Igor'},

    ]

    let dialogs = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good evening!'},
    ]

    let messages = messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogs}

            </div>
            <div className={s.messages}>

                {messages}

            </div>

        </div>
    );
};

