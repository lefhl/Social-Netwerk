import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

let postsData = [
  {id: 1, message: 'Hi, how are you?', likes: 15},
  {id: 1, message: "It's my first post!", likes: 32}
]

let postsElements = postsData
          .map(p => (<Post message={p.message} likes={p.likes}/>))

const MyPosts = () => {
  return     <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div>
                  <textarea></textarea>
                </div>
                <div>
                  <button>Add Post</button>
                </div>
                <div>New post</div>
                <div className={s.posts}>
                  { postsElements }
                </div>
              </div>
}

export default MyPosts;
