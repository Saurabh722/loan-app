import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/userContext';

export default function Home() {
  const user = useContext(UserContext);

  return (
    <main className="home-view">
        <div className="center">
          <div className="display-info">
            <h3>Hi {user.firstName},</h3>
            <p>
              You havent made any loan requests. Need to borrow some money?
            </p>
          </div>
          <Link to="/loan" className='btn'>
              Borrow money
          </Link>
        </div>
    </main>
  )
}