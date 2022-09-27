import React from 'react';
import {PostType} from "../Components/Profile/MyPosts/MyPosts";
import {DialogType, MessageType} from "../App";
import {text} from "stream/consumers";


export type storeType = {
    _state: statePropsType
    _callSubscriber: (state: statePropsType) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: (state: statePropsType) => void) => void
    getState: () => statePropsType
    // addPost: () => void
    dispatch: any
}

export type statePropsType = {
    profilePage: {
        posts: Array<PostType>
        newPostText: string
    },
    messagePage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! How are you?', likes: 5},
                {id: 2, message: 'It`s my first post', likes: 15},
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagePage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Taison'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Igor'},

            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Good evening!'},
            ]
        }
    },
    _callSubscriber(state: statePropsType) {
        console.log('chanched')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: statePropsType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }


}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default store;
