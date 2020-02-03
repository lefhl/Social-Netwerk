import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
  let firstFriends = props.friendsData
        .map( i => (
          <div className={s.friendBlock}>
            <div className={s.imgBox}>
              <img src={i.avatar} alt=""/>
            </div>
            <div> {i.name} </div>
          </div> ));
  return (
    <div className={s.friendsBlock}>
      { firstFriends }
    </div>
  )
}

export default Friends;
