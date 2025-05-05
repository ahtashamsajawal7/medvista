// import React from 'react';
// import './style.css'; // Add your contact-specific styles here
// import contactimg from '../../assets/assets/pexels-kovyrina-3651577.jpg'
// function Contact() {
//   return (
//     <section id="contact">
//       <div className="contact-card container">
//         <div className="contact-image">
//           <img src={contactimg} alt="Contact Us" />
//         </div>
//         <div className="contact-form-container">
//           <h2 className="contact-heading">Contact Us</h2>
//           <form className="contact-form">
//             <div className="form-group">
//               <label htmlFor="name">Your Name</label>
//               <input type="text" id="name" name="name" placeholder="Enter your name" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input type="email" id="email" name="email" placeholder="Enter your email" required />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Your Message</label>
//               <textarea id="message" name="message" rows={5} placeholder="Type your message here" required />
//             </div>
//             <button type="submit" className="submit-btn">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from 'react';
import './style.css'; // Add your styles here
import contactImg from '../../assets/assets/pexels-kovyrina-3651577.jpg'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage('Message sent successfully!');
        setError(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send message. Please try again.');
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setResponseMessage('An error occurred. Please try again later.');
      setError(true);
    }
  };

  return (
    <section id="contact">
      <div className="contact-card container">
        <div className="contact-image">
          <img src={contactImg} alt="Contact Us" />
        </div>
        <div className="contact-form-container">
          <h2 className="contact-heading">Contact Us</h2>
          {responseMessage && (
            <div
              className={`response-message ${error ? 'error' : 'success'}`}
            >
              {responseMessage}
            </div>
          )}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
