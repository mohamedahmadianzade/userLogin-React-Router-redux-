import { Link } from 'react-router-dom';
import UserProfile from '../users/userProfile';
import { useSelector } from 'react-redux';
import './navbar.css'


const NavMenu = () => (
    <div className='col-9'>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                    Users
                </Link>
            </li>

        </ul>
    </div>
)
const NavHeader = () => (
    <>  <a className="navbar-brand" href="#">User managment</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button></>
)


function Navbar() {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <nav className="navbar navbar-expand-lg bg-light main-nav">
            <div className="container-fluid">
                <NavHeader />
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        isAuth && <NavMenu />
                    }
                    <div className='col'>
                        {
                            isAuth && <UserProfile />
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
