import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader />
    }
  return  (
    <div>
      <div>
        <img src={props.profile.photos.large} width="400px"/>
      </div>
      <ProfileStatus status={props.status} />
      <div className={s.descriptionBlock}>
      <div>
         О себе:
        <div>{props.profile.aboutMe}</div>
      </div>
        Мои соцсеточки:
        <ul>
          {
            Object.values(props.profile.contacts).map(sn => {

             if(sn) {
              return<li>{sn}</li>
            } else {
              return null
            }

          })}
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo;
