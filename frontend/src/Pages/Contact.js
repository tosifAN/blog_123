// Contact.js
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Style/Contact.css'; // Import your CSS file for styling

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me through the following channels:</p>

        <div className="contact-method">
          <h3>Email</h3>
          <p>tosif1355@gmail.com</p>
        </div>

        <div className="contact-method">
          <h3>Github</h3>
          <p><a href="https://github.com/tosifAN" target="_blank" rel="noopener noreferrer">github.com/tosifAN</a></p>
        </div>

        <div className="contact-method">
          <h3>LinkedIn</h3>
          <p><a href="https://www.linkedin.com/in/tosif-ansari-49325622a/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tosif-ansari</a></p>
        </div>

        <p>If you are interested in the code behind this website, you can view or contribute to it on GitHub:</p>
        <p><a href="https://github.com/tosifAN/blog_123" target="_blank" rel="noopener noreferrer">github.com/tosifAN/blog_123</a></p>

        {/* You can add more contact methods or additional information here */}

        <p>Looking forward to connecting with you!</p>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
