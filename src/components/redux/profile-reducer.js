const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData:  [
    {id: 1, message: 'Hi, how are you?', likes: 15},
    {id: 2, message: "It's my first post!", likes: 32}
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: let newPost = {
                        id: state.postsData.length,
                        message: state.newPostText,
                        likes: 0
                      };
                      state.postsData.push(newPost);
                      state.newPostText = '';
                      return state;
    case UPDATE_NEW_POST_TEXT:
                    state.newPostText = action.newText;
                    return state;
    default:
        return state;
  }
}

export const addPostActionCreator = () =>  ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
