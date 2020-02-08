import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
          <div className={classes.item}>
            <div className={classes.avatar}></div>
            { props.message }
            <div>
              <span>like { props.likes }</span>
            </div>
          </div>
          )
}

export default Post;
