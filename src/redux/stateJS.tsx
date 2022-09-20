import React from 'react';
import {PostType} from "../Components/Profile/MyPosts/MyPosts";
import {DialogType, MessageType} from "../App";


export type storeType = {
    _state: statePropsType
    _callSubscriber: (state: statePropsType) => void
    updateNewPostText: (newText: string) => void
    getState: () => statePropsType
    addPost: () => void
    subscribe: (observer: (state: statePropsType) => void) => void
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
    getState() {
        return this._state
    },
    _callSubscriber(state: statePropsType) {
        console.log('chanched')
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: statePropsType) => void) {
        this._callSubscriber = observer
    }

}


export default store;
