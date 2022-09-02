import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = (props: any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Taison
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
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

    );
};

export default Dialogs;