import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getUsers, onPageChange, deleteFriend, addFriend} from '../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChange = this.props.onPageChange
  deleteFriend = this.props.deleteFriend
  addFriend = this.props.addFriend

  render() {

    return  <Users onPageChange={this.onPageChange}
                   currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   deleteFriend={this.deleteFriend}
                   addFriend={this.addFriend}/>

  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}



export default compose(
  connect(mapStateToProps, { getUsers, onPageChange, deleteFriend, addFriend}),
  withAuthRedirect
)(UsersContainer);
