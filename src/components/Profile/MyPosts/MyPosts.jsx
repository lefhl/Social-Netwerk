import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer';


const MyPosts = (props) => {

  let postsElements = props.data.postsData
            .map(p => (<Post message={p.message} likes={p.likes}/>))

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

let onPostChange = () => {
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text)
  props.dispatch(action);
}

  return     <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div>
                  <textarea
                  onChange={onPostChange}
                  ref={ newPostElement }
                  value={props.data.newPostText}
                  ></textarea>
                </div>
                <div>
                  <button onClick={ addPost }>Add Post</button>
                </div>
                <div>New post</div>
                <div className={s.posts}>
                  { postsElements }
                </div>
              </div>
}

export default MyPosts;
