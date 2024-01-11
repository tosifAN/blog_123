
import React from "react";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useAuth } from "../Context/auth";
import "./Style/Dashboard.css"; // Import your CSS file for specific dashboard styling

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <>
      <Header />
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            {/* Add sidebar content or additional information */}
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h1 className="dashboard-title">Your Profile</h1>
              <div className="profile-details">
                <h3 className="profile-name">{auth?.user?.name}</h3>
                <h3 className="profile-email">{auth?.user?.email}</h3>
              </div>
            </div>
            {/* Add additional sections or cards for more dashboard features */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;




































/*

import React from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useAuth } from "../Context/auth";



const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <>
    <Header/>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
          </div>
          <div className="col-md-9">
          <h1>Your Profile!</h1>
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
*/