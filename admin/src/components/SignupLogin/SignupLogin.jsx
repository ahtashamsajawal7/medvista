// // // import React, { useState } from 'react';
// // // // import './login.css';

// // // const SignUpLogin = () => {
// // //     const [isActive, setIsActive] = useState(false);

// // //     const handleRegisterClick = () => setIsActive(true);
// // //     const handleLoginClick = () => setIsActive(false);

// // //     return (
// // //         <div className={`container ${isActive ? 'active' : ''}`} id="container">
// // //             <div className="form-container sign-up">
// // //                 <form>
// // //                     <h1>Create Account</h1>
// // //                     <div className="social-icons">
// // //                         <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// // //                     </div>
// // //                     <span>or use your email for registration</span>
// // //                     <input type="text" placeholder="Name" required />
// // //                     <input type="email" placeholder="Email" required />
// // //                     <input 
// // //                         type="text" 
// // //                         placeholder="CNIC" 
// // //                         maxLength="13" 
// // //                         pattern="\d{13}" 
// // //                         title="Please enter a 13-digit CNIC number" 
// // //                         onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)}
// // //                         required 
// // //                     />
// // //                     <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="CNIC Expiry Date" required />
// // //                     <input type="password" placeholder="Password" required />
// // //                     <button type="submit">Sign Up</button>
// // //                 </form>
// // //             </div>

// // //             <div className="form-container sign-in">
// // //                 <form>
// // //                     <h1>Sign In</h1>
// // //                     <div className="social-icons">
// // //                         <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// // //                         <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// // //                     </div>
// // //                     <span>or use your email password</span>
// // //                     <input type="email" placeholder="Email" required />
// // //                     <input type="password" placeholder="Password" required />
// // //                     <a href="#">Forget Your Password?</a>
// // //                     <button type="submit">Sign In</button>
// // //                 </form>
// // //             </div>

// // //             <div className="toggle-container">
// // //                 <div className="toggle">
// // //                     <div className="toggle-panel toggle-left">
// // //                         <h1>Welcome To MedVista</h1>
// // //                         <p>Enter your personal details to use Seller site features</p>
// // //                         <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
// // //                     </div>
// // //                     <div className="toggle-panel toggle-right">
// // //                         <h1>Hello, Friend!</h1>
// // //                         <p>Register with your personal details to use all of site features</p>
// // //                         <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default SignUpLogin;


// // // import React, { useState } from 'react';
// // // import axios from 'axios';  // Ensure axios is installed
// // // import './SignupLogin.css'
// // // const SignUpLogin = () => {
// // //   const [isActive, setIsActive] = useState(false);
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     cnic: '',
// // //     expiryDate: '',
// // //     password: '',
// // //   });

// // //   const [loginData, setLoginData] = useState({
// // //     email: '',
// // //     password: '',
// // //   });

// // //   const [error, setError] = useState('');
// // //   const [successMessage, setSuccessMessage] = useState('');  // Add success message state

// // //   const handleRegisterClick = () => setIsActive(true);
// // //   const handleLoginClick = () => setIsActive(false);

// // //   // Handle form input changes for registration
// // //   const handleRegisterChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   // Handle form input changes for login
// // //   const handleLoginChange = (e) => {
// // //     setLoginData({
// // //       ...loginData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   // Handle registration form submission
// // //   const handleRegisterSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('http://localhost:4000/api/admin/register', formData);
// // //       setSuccessMessage('Registration successful! Please log in.');
// // //       setError('');  // Clear any previous error messages
// // //       setFormData({ name: '', email: '', cnic: '', expiryDate: '', password: '' });  // Reset form fields
// // //     } catch (err) {
// // //       setError(err.response ? err.response.data.message : 'Server error');
// // //       setSuccessMessage('');  // Clear any success messages
// // //     }
// // //   };

// // //   // Handle login form submission
// // //   const handleLoginSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await axios.post('http://localhost:4000/api/admin/login', loginData);
// // //       setSuccessMessage('Login successful! Welcome back.');
// // //       setError('');  // Clear any previous error messages
// // //       // You can store the JWT token or handle post-login actions here
// // //       setLoginData({ email: '', password: '' });  // Reset form fields
// // //     } catch (err) {
// // //       setError(err.response ? err.response.data.message : 'Server error');
// // //       setSuccessMessage('');  // Clear any success messages
// // //     }
// // //   };

// // //   return (
// // //     <div className={`container ${isActive ? 'active' : ''}`} id="container">
// // //       <div className="form-container sign-up">
// // //         <form onSubmit={handleRegisterSubmit}>
// // //           <h1>Create Account</h1>
// // //           <div className="social-icons">
// // //             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// // //           </div>
// // //           <span>or use your email for registration</span>
// // //           <input 
// // //             type="text" 
// // //             name="name" 
// // //             placeholder="Name" 
// // //             value={formData.name} 
// // //             onChange={handleRegisterChange} 
// // //             required 
// // //           />
// // //           <input 
// // //             type="email" 
// // //             name="email" 
// // //             placeholder="Email" 
// // //             value={formData.email} 
// // //             onChange={handleRegisterChange} 
// // //             required 
// // //           />
// // //           <input 
// // //             type="text" 
// // //             name="cnic" 
// // //             placeholder="CNIC" 
// // //             maxLength="13" 
// // //             pattern="\d{13}" 
// // //             title="Please enter a 13-digit CNIC number" 
// // //             value={formData.cnic}
// // //             onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)}
// // //             onChange={handleRegisterChange}
// // //             required 
// // //           />
// // //           <input 
// // //             type="text" 
// // //             name="expiryDate" 
// // //             placeholder="CNIC Expiry Date" 
// // //             value={formData.expiryDate} 
// // //             onChange={handleRegisterChange} 
// // //             onFocus={(e) => e.target.type = 'date'}
// // //             required 
// // //           />
// // //           <input 
// // //             type="password" 
// // //             name="password" 
// // //             placeholder="Password" 
// // //             value={formData.password} 
// // //             onChange={handleRegisterChange} 
// // //             required 
// // //           />
// // //           <button type="submit">Sign Up</button>
// // //           {error && <div className="error">{error}</div>}
// // //           {successMessage && <div className="success">{successMessage}</div>} {/* Display success message */}
// // //         </form>
// // //       </div>

// // //       <div className="form-container sign-in">
// // //         <form onSubmit={handleLoginSubmit}>
// // //           <h1>Sign In</h1>
// // //           <div className="social-icons">
// // //             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// // //             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// // //           </div>
// // //           <span>or use your email password</span>
// // //           <input 
// // //             type="email" 
// // //             name="email" 
// // //             placeholder="Email" 
// // //             value={loginData.email} 
// // //             onChange={handleLoginChange} 
// // //             required 
// // //           />
// // //           <input 
// // //             type="password" 
// // //             name="password" 
// // //             placeholder="Password" 
// // //             value={loginData.password} 
// // //             onChange={handleLoginChange} 
// // //             required 
// // //           />
// // //           <a href="#">Forget Your Password?</a>
// // //           <button type="submit">Sign In</button>
// // //           {error && <div className="error">{error}</div>}
// // //           {successMessage && <div className="success">{successMessage}</div>} {/* Display success message */}
// // //         </form>
// // //       </div>

// // //       <div className="toggle-container">
// // //         <div className="toggle">
// // //           <div className="toggle-panel toggle-left">
// // //             <h1>Welcome To MedVista</h1>
// // //             <p>Enter your personal details to use Seller site features</p>
// // //             <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
// // //           </div>
// // //           <div className="toggle-panel toggle-right">
// // //             <h1>Hello, Friend!</h1>
// // //             <p>Register with your personal details to use all of site features</p>
// // //             <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignUpLogin;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';  // Import useNavigate
// // // import './SignupLogin.css'

// // const SignUpLogin = () => {
// //   const [isActive, setIsActive] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     cnic: '',
// //     expiryDate: '',
// //     password: '',
// //   });

// //   const [loginData, setLoginData] = useState({
// //     email: '',
// //     password: '',
// //   });

// //   const [error, setError] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const navigate = useNavigate();  // Initialize navigate hook

// //   const handleRegisterClick = () => setIsActive(true);
// //   const handleLoginClick = () => setIsActive(false);

// //   // Handle form input changes for registration
// //   const handleRegisterChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle form input changes for login
// //   const handleLoginChange = (e) => {
// //     setLoginData({
// //       ...loginData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle registration form submission
// //   const handleRegisterSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:4000/api/admin/register', formData);
// //       setSuccessMessage('Registration successful! Please log in.');
// //       setError('');
// //       setFormData({ name: '', email: '', cnic: '', expiryDate: '', password: '' });
// //     } catch (err) {
// //       setError(err.response ? err.response.data.message : 'Server error');
// //       setSuccessMessage('');
// //     }
// //   };

// //   // Handle login form submission
// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:4000/api/admin/login', loginData);
// //       setSuccessMessage('Login successful! Redirecting to home page...');
// //       setError('');
// //       localStorage.setItem('authToken', response.data.token);  // Store token for future requests
// //       navigate('/');  // Redirect to home page after successful login
// //       setLoginData({ email: '', password: '' });
// //     } catch (err) {
// //       setError(err.response ? err.response.data.message : 'Server error');
// //       setSuccessMessage('');
// //     }
// //   };

// //   return (
// //     <div className={`sign-up-login ${isActive ? 'active' : ''}`}>
// //     {/* <div className={`sign-up-login container ${isActive ? 'active' : ''}`} id="container"> */}
// //     {/* <div className={`container ${isActive ? 'active' : ''}`} id="container"> */}
// //       <div className="form-container sign-up">
// //         <form onSubmit={handleRegisterSubmit}>
// //           <h1>Create Account</h1>
// //           <div className="social-icons">
// //             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// //           </div>
// //           <span>or use your email for registration</span>
// //           <input 
// //             type="text" 
// //             name="name" 
// //             placeholder="Name" 
// //             value={formData.name} 
// //             onChange={handleRegisterChange} 
// //             required 
// //           />
// //           <input 
// //             type="email" 
// //             name="email" 
// //             placeholder="Email" 
// //             value={formData.email} 
// //             onChange={handleRegisterChange} 
// //             required 
// //           />
// //           <input 
// //             type="text" 
// //             name="cnic" 
// //             placeholder="CNIC" 
// //             maxLength="13" 
// //             pattern="\d{13}" 
// //             title="Please enter a 13-digit CNIC number" 
// //             value={formData.cnic}
// //             onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)}
// //             onChange={handleRegisterChange}
// //             required 
// //           />
// //           <input 
// //             type="text" 
// //             name="expiryDate" 
// //             placeholder="CNIC Expiry Date" 
// //             value={formData.expiryDate} 
// //             onChange={handleRegisterChange} 
// //             onFocus={(e) => e.target.type = 'date'}
// //             required 
// //           />
// //           <input 
// //             type="password" 
// //             name="password" 
// //             placeholder="Password" 
// //             value={formData.password} 
// //             onChange={handleRegisterChange} 
// //             required 
// //           />
// //           <button type="submit">Sign Up</button>
// //           {error && <div className="error">{error}</div>}
// //           {successMessage && <div className="success">{successMessage}</div>}
// //         </form>
// //       </div>

// //       <div className="form-container sign-in">
// //         <form onSubmit={handleLoginSubmit}>
// //           <h1>Sign In</h1>
// //           <div className="social-icons">
// //             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
// //             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
// //           </div>
// //           <span>or use your email password</span>
// //           <input 
// //             type="email" 
// //             name="email" 
// //             placeholder="Email" 
// //             value={loginData.email} 
// //             onChange={handleLoginChange} 
// //             required 
// //           />
// //           <input 
// //             type="password" 
// //             name="password" 
// //             placeholder="Password" 
// //             value={loginData.password} 
// //             onChange={handleLoginChange} 
// //             required 
// //           />
// //           <a href="#">Forget Your Password?</a>
// //           <button type="submit">Sign In</button>
// //           {error && <div className="error">{error}</div>}
// //           {successMessage && <div className="success">{successMessage}</div>}
// //         </form>
// //       </div>

// //       <div className="toggle-container">
// //         <div className="toggle">
// //           <div className="toggle-panel toggle-left">
// //             <h1>Welcome To MedVista</h1>
// //             <p>Enter your personal details to use Seller site features</p>
// //             <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
// //           </div>
// //           <div className="toggle-panel toggle-right">
// //             <h1>Hello, Friend!</h1>
// //             <p>Register with your personal details to use all of site features</p>
// //             <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUpLogin;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './SignupLogin.css'
// const SignUpLogin = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     cnic: '',
//     expiryDate: '',
//     password: '',
//   });

//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();  // Initialize navigate hook

//   const handleRegisterClick = () => setIsActive(true);
//   const handleLoginClick = () => setIsActive(false);

//   // Handle form input changes for registration
//   const handleRegisterChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form input changes for login
//   const handleLoginChange = (e) => {
//     setLoginData({
//       ...loginData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle registration form submission
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/admin/register', formData);
//       setSuccessMessage('Registration successful! Please log in.');
//       setError('');
//       setFormData({ name: '', email: '', cnic: '', expiryDate: '', password: '' });
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Server error');
//       setSuccessMessage('');
//     }
//   };

//   // Handle login form submission
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/admin/login', loginData);
//       setSuccessMessage('Login successful! Redirecting to home page...');
//       setError('');
//       localStorage.setItem('authToken', response.data.token);  // Store token for future requests
//       navigate('/');  // Redirect to home page after successful login
//       setLoginData({ email: '', password: '' });
//     } catch (err) {
//       setError(err.response ? err.response.data.message : 'Server error');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className={`signUpLogin-container ${isActive ? 'active' : ''}`} id="signUpLogin-container">
//       <div className="form-container sign-up">
//         <form onSubmit={handleRegisterSubmit}>
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email for registration</span>
//           <input 
//             type="text" 
//             name="name" 
//             placeholder="Name" 
//             value={formData.name} 
//             onChange={handleRegisterChange} 
//             required 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             value={formData.email} 
//             onChange={handleRegisterChange} 
//             required 
//           />
//           <input 
//             type="text" 
//             name="cnic" 
//             placeholder="CNIC" 
//             maxLength="13" 
//             pattern="\d{13}" 
//             title="Please enter a 13-digit CNIC number" 
//             value={formData.cnic}
//             onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)}
//             onChange={handleRegisterChange}
//             required 
//           />
//           <input 
//             type="text" 
//             name="expiryDate" 
//             placeholder="CNIC Expiry Date" 
//             value={formData.expiryDate} 
//             onChange={handleRegisterChange} 
//             onFocus={(e) => e.target.type = 'date'}
//             required 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             value={formData.password} 
//             onChange={handleRegisterChange} 
//             required 
//           />
//           <button type="submit">Sign Up</button>
//           {error && <div className="error">{error}</div>}
//           {successMessage && <div className="success">{successMessage}</div>}
//         </form>
//       </div>

//       <div className="form-container sign-in">
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
//             <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
//           </div>
//           <span>or use your email password</span>
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             value={loginData.email} 
//             onChange={handleLoginChange} 
//             required 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             value={loginData.password} 
//             onChange={handleLoginChange} 
//             required 
//           />
//           <a href="#">Forget Your Password?</a>
//           <button type="submit">Sign In</button>
//           {error && <div className="error">{error}</div>}
//           {successMessage && <div className="success">{successMessage}</div>}
//         </form>
//       </div>

//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome To MedVista</h1>
//             <p>Enter your personal details to use Seller site features</p>
//             <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello, Friend!</h1>
//             <p>Register with your personal details to use all of site features</p>
//             <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpLogin;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const SignUpLogin = () => {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnic: '',
    expiryDate: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();  // Initialize navigate hook

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  // Handle form input changes for registration
  const handleRegisterChange = (e) => {
    if (e.target.name === 'cnic') {
      let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
      if (value.length > 5) value = value.slice(0, 5) + '-' + value.slice(5);
      if (value.length > 13) value = value.slice(0, 13); // Limit to 13 characters
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle form input changes for login
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle registration form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{5}-\d{7}$/.test(formData.cnic)) {
      setError('Please enter a valid CNIC in the format XXXXX-XXXXXXX');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/api/admin/register', formData);
      setSuccessMessage('Registration successful! Please log in.');
      setError('');
      setFormData({ name: '', email: '', cnic: '', expiryDate: '', password: '' });
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccessMessage('');
    }
  };

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', loginData);
      setSuccessMessage('Login successful! Redirecting to home page...');
      setError('');
      localStorage.setItem('authToken', response.data.token);  // Store token for future requests
      navigate('/');  // Redirect to home page after successful login
      setLoginData({ email: '', password: '' });
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
      setSuccessMessage('');
    }
  };

  return (
    <div className={`signUpLogin-container ${isActive ? 'active' : ''}`} id="signUpLogin-container">
      <div className="form-container sign-up">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleRegisterChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleRegisterChange} 
            required 
          />
          <input 
            type="text" 
            name="cnic" 
            placeholder="CNIC (XXXXX-XXXXXX-X)" 
            maxLength="15" 
            value={formData.cnic}
            onChange={handleRegisterChange}
            required 
          />
          <input 
            type="text" 
            name="expiryDate" 
            placeholder="CNIC Expiry Date" 
            value={formData.expiryDate} 
            onChange={handleRegisterChange} 
            onFocus={(e) => e.target.type = 'date'}
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleRegisterChange} 
            required 
          />
          <button type="submit">Sign Up</button>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
        </form>
      </div>

      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={loginData.email} 
            onChange={handleLoginChange} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={loginData.password} 
            onChange={handleLoginChange} 
            required 
          />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome To MedVista</h1>
            <p>Enter your personal details to use Seller site features</p>
            <button className="hidden" onClick={handleLoginClick} id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" onClick={handleRegisterClick} id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
