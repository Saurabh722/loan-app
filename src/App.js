import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Init from './pages/home/init';
import Home from './pages/home';
import Login from './pages/user/login';
import Register from './pages/user/register';
import Account from './pages/user/account';
import Loan from './pages/loan';
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
        <footer><span className='copy-right' data-testid='footer'>© 2023 | Demyst</span></footer>
      </UserProvider>
    </div>
  );
}

export default App;
