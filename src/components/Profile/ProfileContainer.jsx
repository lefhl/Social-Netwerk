import React from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {Redirect} from 'react-router-dom';
import Profile from './Profile';
import * as axios from 'axios';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getProfile, getStatus} from '../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId=2;
    }
      this.props.getProfile(userId)
      this.props.getStatus(userId)
  }

  render() {

    return  <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {getProfile, getStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
