import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { UserContext } from '../../../context/userContext';

import logout from '../../../services/logout.js';

export default function Account() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  async function logoutHandler() {
    const status = await logout();
  }

  if (!user.userId) {
    return <Navigate to="/login" />
  }

  return (
    <main className="account-view">
      <div className="section">
        {
          user && <div className="form">
            <div className='view-set'>
              <span>UserName:</span><span>{user.userId || ''}</span>
            </div>
            <div className='view-set'>
              <span>First Name:</span><span>{user.firstName || ''}</span>
            </div>
            <div className='view-set'>
              <span>Last Name:</span><span>{user.lastName || ''}</span>
            </div>
            <div className='view-set'>
              <span>email:</span><span>{user.email || ''}</span>
            </div>
            <button onClick={() => navigate(-1) } className='btn small center'>
              back
            </button>
            <button onClick={logoutHandler} className='btn light small center bottom'>
              Logout
            </button>
          </div>
        }
      </div>
    </main>
  )
}