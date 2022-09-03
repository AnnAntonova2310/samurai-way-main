import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>Dimych</NavLink>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/2'}>Sveta</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/3'}>Taison</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/4'}>Sasha</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/5'}>Victor</NavLink>
                    </div>
                    <div className={s.dialog}>
                        <NavLink to={'/dialogs/6'}>Valera</NavLink>
                    </div>
                </div>
                <div className={s.messages}>
                    <div>
                        <div className={s.message}>Hi</div>
                        <div className={s.message}>How are you?</div>
                        <div className={s.message}>Good evening!</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

