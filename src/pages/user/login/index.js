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
  const [error, setError] = useState();
  const dispatch = useContext(UserDispatchContext);

  async function onLogin() {
    const response = await login({ user });
    const { data, type } = response;

    if (type === "error") {
      setError(data);
    }

    if (data.userId) {
      dispatch({
        type: 'update',
        data: data
      });
    }
  }

  if (userdata.userId) {
    return <Navigate to="/home" />
  }

  const onChangeHandler = (event) => {
    const { target } = event;

    if (error) {
      setError(false);
    }
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
          <div className="form-set">
            <input type="password" placeholder='Password' name="password" onChange={onChangeHandler} />
          </div>
          <div className="form-set">
            {error && <span className="error-message">{error}</span>}
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