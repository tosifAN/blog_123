import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Style/Homepage.css';



const BlogItem = ({ blog }) => {
  const [showFullContent, setShowFullContent] = useState(false);


  const handleBlogItemClick = () => {
    // Change the window location to navigate to the individual blog page
    window.location.href = `/bloger/${blog._id}`;
  };
  const toggleShowContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blog-item" onClick={handleBlogItemClick}>
      <h3>{blog.title}</h3>
      <p dangerouslySetInnerHTML={{ __html: showFullContent ? blog.content.replace(/\n/g, '<br>') : `${blog.content.substring(0, 300)}...` }} />
      {blog.content.length > 300 && (
        <button onClick={toggleShowContent}>
          {showFullContent ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

function App() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [showNextPageButton, setShowNextPageButton] = useState(true);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = (page) => {
    axios.get(`http://localhost:5000/blog/all?page=${page}&limit=${blogsPerPage}`)
      .then(response => {
        const fetchedBlogs = response.data;
        setAllBlogs(fetchedBlogs);

        setShowNextPageButton(fetchedBlogs.length === blogsPerPage);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  };

  const handleGetStartedClick = () => {
    window.location.href = '/signup';
  };

  const handleNextPageClick = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  return (
    <>
      <Header />
      <div className="hero-content">
        <h1>Welcome to Catblogger!</h1>
        <p>Welcome to Catblogger, where a community of passionate individuals converges to share their experiences, stories, and deep appreciation for diverse topics. Engage with like-minded enthusiasts and contribute to the wealth of knowledge and insights within our community.</p>
        <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <main className="center-content">
        <section className="latest-blogs">
          <h2>All Blogs</h2>
          <div className="latest-blog-list">
            {allBlogs.map(blog => (
              <BlogItem key={blog._id} blog={blog} />
            ))}
          </div>
          {showNextPageButton && (
            <button className="next-page-button" onClick={handleNextPageClick}>
              Next Page
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

















































































/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Style/Homepage.css'; // Import your CSS file for styling

function App() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs when the component mounts
    axios.get('http://localhost:5000/blog/all')
      .then(response => {
        setAllBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching all blogs:', error);
      });
  }, []);
       // Function to handle the "Get Started" button click
  const handleGetStartedClick = () => {
    // Redirect to the signup page
    window.location.href = '/signup'; // Replace with the actual path to your signup page
  };
  return (
    <>
      <Header />
      <div className="hero-content">
        <h1>Welcome to Catblogger!</h1>
        <p>Welcome to Catblogger, where a community of passionate individuals converges to share their experiences, stories, and deep appreciation for diverse topics. Engage with like-minded enthusiasts and contribute to the wealth of knowledge and insights within our community.</p>
        <button className="cta-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <main className="center-content">
        <section className="latest-blogs">
          <h2>All Blogs</h2>
          <div className="latest-blog-list">
            {allBlogs.map(blog => (
              <div key={blog._id} className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;



*/

































































/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../App.css'; // Import your CSS file for styling

function App() {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs when the component mounts
    axios.get('http://localhost:5000/blog/all')
      .then(response => {
        setAllBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching all blogs:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="hero-content">
        <h1>Welcome to Catblogger!</h1>
        <p>Welcome to Catblogger, where a community of passionate individuals converges to share their experiences, stories, and deep appreciation for diverse topics. Engage with like-minded enthusiasts and contribute to the wealth of knowledge and insights within our community.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <main className="center-content">
        <section className="latest-blogs">
          <h2>All Blogs</h2>
          <div className="latest-blog-list">
            {allBlogs.map(blog => (
              <div key={blog._id} className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
*/