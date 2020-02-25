import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {NavLink} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData
            .map(d => (<DialogItem
              name={d.name}
              id={d.id}
              avatar={d.avatar}/>))

  let messagesElements = state.messagesData
              .map( m => (<Message message={m.message}  />))
  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body)
  }

  let onSendMessageClick = () => {
    props.sendMessage()
  }

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {
            dialogsElements
          }

        </div>
        <div className={s.messages}>
          <div>{ messagesElements }</div>
          <div>
            <div><textarea
            onChange={onNewMessageChange}
            value={newMessageBody}
            placeholder="Введите своё сообщение"></textarea></div>
            <div><button onClick={onSendMessageClick}>Send</button></div>
          </div>
        </div>
      </div>
  )
}

export default Dialogs;
