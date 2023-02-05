import {v1} from "uuid";
import {MyPostsType} from "../components/Profile/MyPosts/MyPosts";
export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profilePageReducer = (state: MyPostsType, action: any) => {

    switch (action.type){
        case ADD_POST:
                const newPost = {
                    id: v1(),
                    likeCounts: 0,
                    mes: state.newPostText,
                    photo: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg",
                    errorMes: 'Image not found'
                }
                state.posts.push(newPost)
                state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export default profilePageReducer