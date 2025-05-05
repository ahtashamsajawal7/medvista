// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
// import { Routes, Route } from 'react-router-dom';
// import Add from './pages/Add/Add';
// import List from './pages/List/List';
// import Orders from './pages/Orders/Orders';
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import SignUpLogin from './components/SignupLogin/SignupLogin';
// import React, { useState, useEffect } from 'react'; // Use a single import statement for React

// const App = () => {

//   const url = 'http://localhost:4000';

//   return (
//     <div>
//       <ToastContainer/>
//       <Navbar/>
//       <hr/>
//       <SignUpLogin/>
//       <div className="app-content">
//         <Sidebar/>
//         <Routes>
//           <Route path='/add' element={<Add url={url} />} />
//           <Route path='/list' element={<List url={url}/>} />
//           <Route path='/orders' element={<Orders url={url}/>} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';  // Import useState and useEffect
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpLogin from './components/SignupLogin/SignupLogin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state
  const url = 'http://localhost:4000';
  const navigate = useNavigate();

  // Check if user is logged in from localStorage on page load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);  // User is logged in
    }
  }, []);

  // If user is logged in, show the app content, otherwise show SignUpLogin component
  return (
    <div>
      <ToastContainer />
      {isLoggedIn ? (
        <>
          {/* <Navbar /> */}
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <hr />
          <div className="app-content">
            <Sidebar />
            <Routes>
              <Route path='/add' element={<Add url={url} />} />
              <Route path='/list' element={<List url={url} />} />
              <Route path='/orders' element={<Orders url={url} />} />
            </Routes>
          </div>
        </>
      ) : (
        <SignUpLogin setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
