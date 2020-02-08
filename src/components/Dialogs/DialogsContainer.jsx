import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

// const DialogsContainer = (props) => {
//
//   let state = props.store.getState().dialogsPage;
//
//   let onNewMessageChange = (body) => {
//       props.store.dispatch(updateNewMessageBodyCreator(body))
//   }
//
//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator())
//   }
//
//   return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
// }


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
