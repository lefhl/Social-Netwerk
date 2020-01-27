import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
          <div className={classes.item}>
            <img src="https://illustrators.ru/uploads/illustration/image/1232594/square_%D1%8B%D1%8B%D1%8B%D1%8B.png"/>
            { props.message }
            <div>
              <span>like { props.likes }</span>
            </div>
          </div>
          )
}

export default Post;
