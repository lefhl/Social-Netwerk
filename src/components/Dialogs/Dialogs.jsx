import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';

let dialogsData = [
  {id: 1, name: 'Petr III'},
  {id: 2, name: 'Iosif KabbZona'},
  {id: 3, name: 'aNTON'},
  {id: 4, name: 'sWeaTy'},
  {id: 5, name: 'Mark'},
  {id: 7, name: 'Pasha Durov'}
]
let messagesData = [
  {Id: 1, message: 'Hi 1'},
  {Id: 1, message: 'Hi 2'},
  {Id: 1, message: 'Hi 3'},
  {Id: 1, message: 'Hi 4'},
  {Id: 1, message: 'Hi 5'},
  {Id: 1, message: 'Hi 6'}
]

let dialogsElements = dialogsData
          .map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))

let messagesElements = messagesData
            .map( message => (<Message message={message.message} />))

const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {
            dialogsElements
          }

        </div>
        <div className={s.messages}>
          {
            messagesElements
          }
        </div>
      </div>
  )
}

export default Dialogs;
