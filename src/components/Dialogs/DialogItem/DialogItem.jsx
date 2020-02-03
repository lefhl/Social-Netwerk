import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
  let path = /dialogs/ + props.id;
  return (
    <div className={s.dialog  + ' ' + s.active}>
      <NavLink to={path} activeClassName={s.active}>
        <div className="dialogContainer">
          <div className={s.dialogFace}>
            <div className={s.imgBox}>
              <img src={props.avatar} alt=""/>
            </div>
            <div className={s.name}>
                { props.name }
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}


export default DialogItem;
