import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login'
import {BrowserRouter, Route} from 'react-router-dom';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={ () => <DialogsContainer store={props.store}/>}/>

                <Route path="/profile/:userId?"
                       render={ () => <ProfileContainer store={ props.store}/> }/>

                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" component={UsersContainer}/>
                <Route path="/login" component={LoginPage}/>
              </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
