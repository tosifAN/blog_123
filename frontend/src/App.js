// App.js

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./Pages/Homepage.js";
import Login from "./Pages/Login.js";
import SignUp from './Pages/Signup.js';
import Dashboard from "./Pages/Dashboard.js";
import Blog from "./Pages/Userblog.js";
import Contact from "./Pages/Contact.js";
import Bloger from './Pages/Blog.js'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard/user" component={Dashboard} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/bloger/:id" component={Bloger} />
      </div>
    </Router>
  );
}

export default App;

///<Navbar title="Homer"/>
///  <Footer title="Homer"/>
// <Header/>
// <div>
//  <li>"Welcome to CatBlogger"</li>
//  </div>
// <Footer/>






















/*
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
*/


//npm install react-router-dom@5.3.0  bhai bhai bhai
