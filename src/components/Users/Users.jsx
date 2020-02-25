import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';
import {usersAPI} from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return  (      <div>
      {props.isFetching && <Preloader />}
      <div>
        {
          pages.map( p => {
            return <span onClick={() => {props.onPageChange(p, props.pageSize)}} className={`${props.currentPage === p ? styles.active_page : ''} ${styles.pages}`}>{p}</span>
          })
        }
      </div>
      {
        props.users.map( u => <div key={u.id}>
          <span>
            <div>
              <NavLink to={'profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.ava}/>
              </NavLink>
            </div>
            <div>{
              u.followed
              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.deleteFriend(u.id)}>unFollow</button>
              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.addFriend(u.id)}>Follow</button>
            }</div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </div>
      )
      }
  </div>
  )
  }


export default Users;
