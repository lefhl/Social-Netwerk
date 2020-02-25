import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {Redirect} from 'react-router-dom';
import {sendMessageCreator, updateNewMessageBodyCreator} from '../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {compose} from 'redux';
import {connect} from 'react-redux';







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


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
