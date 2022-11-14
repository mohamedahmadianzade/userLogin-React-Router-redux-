import logo from './logo.svg';
import './App.css';
import Navbar from '../navbar/navbar';
import Main from '../main/main';
import { Link, Outlet } from 'react-router-dom';
import Login from '../users/login';
import { useSelector } from 'react-redux';
function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  console.log("IsAuth", isAuth);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Navbar></Navbar>

        </div>
      </div>
      <div className='row main'>
        <div className='col'>

          {
            isAuth ? <Outlet /> : <Login />
          }

        </div>
      </div>

    </div>
  );
}

export default App;
