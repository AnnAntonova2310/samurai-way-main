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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Taison'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Igor'},

    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good evening!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                {/*<DialogItem name={'Valera'} id={3}/>*/}
                {/*<DialogItem name={'Dimych'} id={4}/>*/}
                {/*<DialogItem name={'Victor'} id={5}/>*/}
                {/*<DialogItem name={'Igor'} id={6}/>*/}


                <div className={s.messages}>
                    <div>
                        <Message message={messagesData[0].message}/>
                        <Message message={messagesData[1].message}/>
                        <Message message={messagesData[2].message}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

