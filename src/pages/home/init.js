import { Link } from 'react-router-dom';

function Init() {
  return (
    <div className="App">
      <h2>Welcome to Demyst Bank</h2>
      <div className="action-container center bottom">
        <Link to="/login" className='btn'>
          Sign In
        </Link>
        <Link to="/register" className='btn light'>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Init;
