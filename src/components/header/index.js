import avatar from './../../images/avatar_48x48.png';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

export default function Headers() {
    const { userId } = useContext(UserContext);
    return <header>
        <h1>Demyst Bank
        </h1>
        {userId && <Link to='./account' className='profile-btn'>
            <img className="avatar" src={avatar} />
        </Link>}
    </header>
}