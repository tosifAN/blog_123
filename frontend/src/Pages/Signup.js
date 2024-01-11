import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      console.log('Signup successful!', res.data);

      // Redirect to home page after successful signup
      window.location.href = '/'; // Redirect to home route
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <>
    <Header/>
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="form-control"
            id="exampleInputName"
            name="name"
            placeholder="Enter Your Name"
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
































/*
import React, { useState } from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from "axios";


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

   // form function
   const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    try {
        res = await axios.post('/auth/Signup', {
        name,
        email,
        password
      });
      if (res && res.data.success) {
        alert("register successfuly");
        console.log("register successfuly");
      } else {
        console.log("toast error");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
      console.log("again toast error");
    }
  };


  return (
    <>
      <Header />
      <div className="container">
        <h2>Welcome to Sign Up Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;


*/