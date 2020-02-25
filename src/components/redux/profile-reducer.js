import {profileAPI} from '../../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts:  [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: "It's my first post!", likes: 32}
  ],
  newPostText: '',
  profile: null,
  status: 'Новый статус у меня'
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
        let newPost = {
            id: state.posts.length,
            message: state.newPostText,
            likes: 0
          };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
        return state;
  }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data.status))
      })
  }
}

export default profileReducer;
