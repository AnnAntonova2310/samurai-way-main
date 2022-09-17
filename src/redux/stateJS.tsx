import React from 'react';
import {PostType} from "../Components/Profile/MyPosts/MyPosts";
import {DialogType, MessageType} from "../App";
import {rerenderEntireTree} from '../render'

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

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText

    rerenderEntireTree(state)
}

export default state;