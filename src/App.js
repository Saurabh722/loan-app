import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Init from './home/init';
import Home from './home';
import Login from './user/login';
import Register from './user/register';
import Account from './user/account';
import Loan from './loan';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
          <Routes>
            <Route exact path="/" Component={Init} />
            <Route path="/home" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/account" Component={Account} />
            <Route path="/loan" Component={Loan} />
          </Routes>
        <footer><span className='copy-right'>© 2023 | Demyst</span></footer>
      </UserProvider>
    </div>
  );
}

export default App;
