import React, { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
import slider1 from "./slider_1.jpg";
import slider2 from "./slider_3.jpg";
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {CLEAR__USER} from "../../redux/auth/authTypes"
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const state = useSelector(state => state.cart)
    const user = useSelector(state => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();

    
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userDataFromStorage = localStorage.getItem('user');
        console.log(userDataFromStorage)
        if (userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage));
        }
    }, []);


const handleLogout = () => {
    // Dispatch logout action
    localStorage.clear("user");
    localStorage.clear("auth_token");
    dispatch({ type: "CLEAR__USER" });
   history.push("/login")
  };
  return (
    <div>
       <div className="header-container container-fluid bg-light">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                 <a href = "/home">      <img src="assets/images/logo.png" alt=""  /></a> 
                        <button className="navbar-toggler d-lg-none d-md-block " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="col-lg-9 d-none d-lg-block ">
                        <ul>
                            <li className='text-dark'><i className="far fa-envelope"></i> misbah7370@gmail.com</li>
                            <li className='text-dark'><i className="fas fa-headphones-alt"></i> +189 8162 9287</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="menu-jk" className="header-bottom contaienr-fluid">
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to = "/home">
                            <li className="nav-item active">
                                <a className="nav-link text-white">Home </a>
                            </li>
                            </Link>
                            <Link to = "/About">
                            <li className="nav-item">
                                <a className="nav-link" >About Us</a>
                            </li>
                            </Link>
                            <Link to = "/Services">
                            <li className="nav-item">
                                <a className="nav-link" >Services</a>
                            </li></Link>
                            <Link to = "/Team">
                            <li className="nav-item">
                                <a className="nav-link">Team</a>
                            </li></Link>
                            <Link to = "/Courses1">
                            <li className="nav-item">
                                <a className="nav-link" >Courses</a>
                            </li></Link>
                            <Link to = "/News">
                            <li className="nav-item">
                                <a className="nav-link" >Latest News</a>
                            </li></Link>
                            <Link to = "/Contact">
                            <li className="nav-item">
                                <a className="nav-link" >Contact Us</a>
                            </li></Link>
                            <li className="nav-item">
                            <Link to="/cart" className="btn btn-outline-light m-2">
                            Cart ({state ? state.length : 0}) </Link>

                            </li>
                          
                            {/* <li className="nav-item">
                            <Sidebar Icon={ExitToAppIcon} title={('Logout')}/>
                            </li> */}
                            <li className="nav-item">
                            {/* <Link to="/login" className="btn btn-outline-light m-2">
                             ({user ? user.user.userName : useHistory.push("/login")}) </Link> */}

{userData ? ( // Check if user data exists
                    <Link to="/" className="btn m-2">
                        <span className='text-light'>{userData.userName}</span>
                    </Link>
                ) : (
                    <Link to="/login" className="btn btn-outline-light m-2">
                        Login
                    </Link>
                )}
                {userData && ( // Show logout button only if user is logged in
                    <button className="btn btn-outline-light m-2" onClick={handleLogout}>
                        Logout
                    </button>
                )}
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar

// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useHistory, useLocation } from 'react-router-dom';
// import "./App.css";
// import { CLEAR__USER } from "../../redux/auth/authTypes"; // Assuming you have an action creator for logging out

// const Navbar = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const state = useSelector(state => state.cart)
//   const user = useSelector(state => state.auth)

//     const [userData, setUserData] = useState(null);
//     const [cart, setCart] = useState([]);

//     // Retrieve user data
//     useEffect(() => {
//         const userDataFromStorage = localStorage.getItem('user');
//         if (userDataFromStorage) {
//             setUserData(JSON.parse(userDataFromStorage));
//         }
//     }, []);
//         console.log(cart)

//     // Retrieve cart data



//     const handleLogout = () => {
//         localStorage.clear(); // Note: This clears the entire local storage. Be specific if you have other data to keep.
//         // Assuming you have a logout action to clear the user in Redux as well
//         dispatch({ type: 'CLEAR_USER' });
//         history.push("/login");
//     };

//     return (
//         <div>
//             <div className="header-container container-fluid bg-light">
//                 <div className="header-top">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3 col-md-12">
//                                 <Link to="/home"><img src="assets/images/logo.png" alt="" /></Link>
//                             </div>
//                             <div className="col-lg-9 d-none d-lg-block ">
//                                 <ul>
//                                     <li className='text-dark'><i className="far fa-envelope"></i> misbah7370@gmail.com</li>
//                                     <li className='text-dark'><i className="fas fa-headphones-alt"></i> +189 8162 9287</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="menu-jk" className="header-bottom container-fluid">
//                     <div className="container">
//                         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                 <ul className="navbar-nav mr-auto">
//                                     <Link to="/home" className="nav-item active nav-link text-white">Home</Link>
//                                     <Link to="/about" className="nav-item nav-link">About Us</Link>
//                                     <Link to="/services" className="nav-item nav-link">Services</Link>
//                                     <Link to = "/Courses1">
//                            <li className="nav-item">
//                                <a className="nav-link" >Courses</a>
//                             </li></Link>
//                                     {/* Add more navigation links here */}
//                                     <li className="nav-item">
//                                         <Link to="/cart" className="btn btn-outline-light m-2">
//                                             Cart ({state ? state.length : 0})
//                                         </Link>
//                                     </li>
//                                     <li className="nav-item">
//                                         {userData ? (
//                                             <>
//                                                 <Link to="/" className="btn m-2 text-light">{userData.userName}</Link>
//                                                 <button className="btn btn-outline-light m-2" onClick={handleLogout}>Logout</button>
//                                             </>
//                                         ) : (
//                                             <Link to="/login" className="btn btn-outline-light m-2">Login</Link>
//                                         )}
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

