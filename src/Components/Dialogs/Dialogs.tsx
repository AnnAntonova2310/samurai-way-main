import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../App";
import {Message} from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/stateJS";


type DialogsPropsType = {
    messagePage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        newMessageBody: string
    }
    dispatch: any

}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogs = props.messagePage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messages = props.messagePage.messagesData.map(message => <Message message={message.message}/>)
    let newMessageBody = props.messagePage.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={'Enter your message'}
                        onChange={onNewMessageChange}
                    />

                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

