import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../App";
import {Message} from "./Message/Message";


type DialogsPropsType = {
    messagePage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }

}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messages = props.messagePage.messagesData.map(message => <Message message={message.message}/>)

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

