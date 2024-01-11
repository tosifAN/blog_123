
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../Context/auth';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [auth, setAuth] = useAuth();
  const [error, setError] = useState(null); // Add error state

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (res && res.data.success) {
        console.log('Login successful!', res.data);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        window.location.href = '/';
      } else {
        // Handle wrong credentials
        setError('Wrong credentials. Please try again.');
      }
    } catch (error) {
      console.log("main hu error"); 
      setError('Wrong credentials. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h2>Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
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
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;


































































/*

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from "../Context/auth";
import Header from '../Components/Header';
import Footer from '../Components/Footer';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [auth, setAuth] = useAuth();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      
      if (res && res.data.success) {
        console.log('Login successful!', res.data);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Header/>
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;







*/



































































































/*

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password
      });

      console.log('Login successful!', res.data);

      // Handle successful login (e.g., set user session/token, redirect, etc.)

      // For example, you might set a token in localStorage and redirect to another page:
      localStorage.setItem('token', res.data.token);
      window.location.href = '/'; // Redirect to dashboard route after login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (e.g., show error message to the user)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;



*/
















































































/*


import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Welcome to Login Page</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="text-center"> {/* Center aligns content }
            <button type="submit" className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;

*/
