import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

  return  <header className={classes.header}>
    <img src="https://www.logaster.ru/static/v3/img/products/logo.png"/>

      <div className={classes.loginBlock}>
        {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink>}

      </div>

  </header>

}

export default Header;
