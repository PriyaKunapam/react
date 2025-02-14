// import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
// import Contactus from "./Contactus";
// import Aboutus from "./Aboutus";
// import Cart from "./Cart";
// import Milk from "./Milk";
// import Login from "./Login";
// import { logout } from "./Store";

// import "./App.css";
// import Nonveg from "./Nonveg";
// import { useDispatch, useSelector } from "react-redux";
// import Home from "./home";
// import Veg from "./veg";
// import Order from "./Order";
// // import Orders from './Order';

// function App()
// {
//   const dispatch=useDispatch();
//   const cart = useSelector((state) => state.cart);  // Ensure cart is always an array
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user); 
  
  
//   return(
//     <>
//    <BrowserRouter>
//   <div className="app-container">
//     {/* Navigation Bar */}
//     <nav className="navbar">
//       <div className="logo">🛒 Welcome to my Grocery Store</div>

//       {/* Centering the links */}
//       <div className="nav-center top-fix">
//         <Link to="/home">Home</Link>&emsp;
//         <Link to="/veg">Veg</Link>&emsp;
//         <Link to="/nonveg">Non-Veg</Link>&emsp;
//         <Link to="/milk">Milk</Link>&emsp;
//         <Link to="/aboutus">AboutUs</Link>&emsp;
//         <Link to="/contactus">ContactUs</Link>&emsp;
//         <Link to="/carbgt">Cart <span className="cart-count">{totalItems}</span></Link>&emsp;
//         <Link to="/orders">Orders</Link>&emsp;
//       </div>
//       {/* Authentication Section (Right Side) */}
//       <div className="auth-section">
//         {isAuthenticated ? (
//           <>
//             <span className="user-name">Welcome, {user}!</span>
//             <button onClick={() => dispatch(logout())} className="btn-logout">Logout</button>
//           </>
//         ) : (
//           <Link to="/login" className="btn-login">Sign In</Link>
//         )}
//       </div>
//     </nav>
//     {/* Page Content */}
//     <div className="content">
//     <Routes>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/veg" element={<Veg/>} />
//         <Route path="/nonveg" element={<Nonveg/>}/>
//         <Route path="/milk" element={<Milk/>}/>
//         <Route path="/orders" element={<Order/>}/>
//         <Route path="/aboutus" element={<Aboutus />}/>
//         <Route path="/contactus" element={<Contactus/>}/>
//         <Route path="/cart" element={<Cart />}/>
//         <Route path="/login" element={<Login />}/>
//         <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
//       </Routes>
//     </div>
//   </div>

// </BrowserRouter>
// </>
// )
// }
// export default App;



import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Cart from "./Cart";
import Milk from "./Milk";
import Login from "./Login";
import { logout } from "./Store";
import { useDispatch, useSelector } from "react-redux";
import Home from "./home";
import Nonveg from "./Nonveg";
import Veg from "./veg";
import Order from "./Order";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart); 
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); 

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          {/* Navigation Bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="navbar-brand">🛒 Welcome to my Grocery Store</div>&emsp;&emsp;
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">&emsp;&emsp;&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/veg">Veg</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/nonveg">Non-Veg</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/milk">Milk</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/aboutus">AboutUs</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/contactus">ContactUs</Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">Cart <span className="badge bg-primary">{totalItems}</span></Link>
                </li>&emsp;&emsp;
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">Orders</Link>
                </li>&emsp;&emsp;
              </ul>
              {/* Authentication Section (Right Side) */}
              <div className="d-flex">
                {isAuthenticated ? (
                  <>
                    <span className="navbar-text me-3">Welcome, {user}!</span>
                    <button onClick={() => dispatch(logout())} className="btn btn-outline-danger">Logout</button>
                  </>
                ) : (
                  <Link to="/login" className="btn btn-outline-success">Sign In</Link>
                )}
              </div>
            </div>
          </nav>
          
          {/* Page Content */}
          <div className="mt-4">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/veg" element={<Veg />} />
              <Route path="/nonveg" element={<Nonveg />} />
              <Route path="/milk" element={<Milk />} />
              <Route path="/orders" element={<Order />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
