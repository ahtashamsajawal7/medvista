// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
//     <link rel="stylesheet" href="./login.css">
//     <title>Sign up/Login</title>
// </head>

// <body>

//     <div class="container" id="container">
//         <div class="form-container sign-up">
//             <form>
//                 <h1>Create Account</h1>
//                 <div class="social-icons">
//                     <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email for registeration</span>
//                 <input type="text" placeholder="Name" required>
//                 <input type="email" placeholder="Email" required>
//                 <input 
//                 type="text" 
//                 placeholder="CNIC" 
//                 maxlength="13" 
//                 pattern="\d{13}" 
//                 title="Please enter a 13-digit CNIC number" 
//                 oninput="this.value = this.value.replace(/\D/g, '').slice(0, 13)"
//                 required>
//                 <input type="text" onfocus="(this.type='date')" placeholder="CNIC Expiry Date" required>
//                 <input type="password" placeholder="Password" required>
//                 <button>Sign Up</button>
//             </form>
//         </div>
//         <div class="form-container sign-in">
//             <form>
//                 <h1>Sign In</h1>
//                 <div class="social-icons">
//                     <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
//                     <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
//                 </div>
//                 <span>or use your email password</span>
//                 <input type="email" placeholder="Email" required>
//                 <input type="password" placeholder="Password" required>
//                 <a href="#">Forget Your Password?</a>
//                 <button>Sign In</button>
//             </form>
//         </div>
//         <div class="toggle-container">
//             <div class="toggle">
//                 <div class="toggle-panel toggle-left">
//                     <h1>Welcome To MedVista</h1>
//                     <p>Enter your personal details to use Seller site features</p>
//                     <button class="hidden" id="login">Sign In</button>
//                 </div>
//                 <div class="toggle-panel toggle-right">
//                     <h1>Hello, Friend!</h1>
//                     <p>Register with your personal details to use all of site features</p>
//                     <button class="hidden" id="register">Sign Up</button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <script>
//         const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classList.remove("active");
// });


//     </script>
// </body>

// </html> -->
import React, { useState } from 'react';
import './login.css';

const SignUpLogin = () => {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => setIsActive(true);
    const handleLoginClick = () => setIsActive(false);

    return (
        <div className={`container ${isActive ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input 
                        type="text" 
                        placeholder="CNIC" 
                        maxLength="13" 
                        pattern="\d{13}" 
                        title="Please enter a 13-digit CNIC number" 
                        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '').slice(0, 13)}
                        required 
                    />
                    <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="CNIC Expiry Date" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <div className="form-container sign-in">
                <form>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <a href="#">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
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
