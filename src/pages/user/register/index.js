import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

import registerUser from '../../../services/registerUser.js';

const initUser = {
  userId: '',
  firstName: '',
  lastName: '',
  email: ''
}

export default function Register() {
  const [user, setUser] = useState(initUser);
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) {
    return <Navigate to="/login" />
  }

  async function onUserRegister() {
    const { isAuth } = await registerUser({ user });
    
    setIsAuth(isAuth);
  }

  const onChangeHandler = (event) => {
    const { target } = event;

    setUser({
      ...user,
      [target.name]: target.value
    })
  }

  return (
    <main className="egistration-view">
      <div className="section">
          <div className="registration-view form center">
            <div className="form-set">
              <input placeholder='UserName' name="userId" onChange={onChangeHandler} />
            </div>
            <div className="form-set">
              <input type="password" placeholder='Password' name="password" onChange={onChangeHandler} />
            </div>
            <div className="form-set">
              <input placeholder='firstName' name="firstName" onChange={onChangeHandler} />
            </div>
            <div className="form-set">
              <input placeholder='lastName' name="lastName" onChange={onChangeHandler} />
            </div>
            <div className="form-set">
              <input placeholder='email' name="email" onChange={onChangeHandler} />
            </div>
            <div className="form-set">
              <button className="btn large" onClick={onUserRegister}>
                Sign Up
              </button>
              <span className="light-text">Already have an account? </span>
              <Link to="/login">
                Sign In
              </Link>
            </div>
          </div>
      </div>
    </main>
  )
}