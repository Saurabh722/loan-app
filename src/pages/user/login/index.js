import { useState, useContext } from 'react';

import { Navigate, Link } from 'react-router-dom';

import { UserContext, UserDispatchContext } from './../../../context/userContext';
import login from '../../../services/login.js';

const initUser = {
  userId: '',
  password: ''
}

export default function Login() {
  const userdata = useContext(UserContext);
  const [user, setUser] = useState(initUser);
  const dispatch = useContext(UserDispatchContext);

  async function onLogin() {
    console.log(user);
    const newUser = await login({ user });
    console.log(newUser);
    dispatch({
      type: 'update',
      data: newUser
    });
  }

  if (userdata.userId) {
    return <Navigate to="/home" />
  }

  const onChangeHandler = (event) => {
    const { target } = event;

    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  return (
    <main className="login-view">
      <div className="section">
        <div className="form center">
          <div className="form-set">
            <input placeholder='UserName' name="userId" onChange={onChangeHandler} />
          </div>
          <div className={'login-set'}>
            <input placeholder='Password' name="password" onChange={onChangeHandler} />
          </div>
          <div className={'login-set'}>
            <button className="btn large" onClick={onLogin}>
              Login
            </button>
            <span className="light-text">Don't have an account? </span>
            <Link to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}