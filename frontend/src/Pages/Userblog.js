

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useAuth } from '../Context/auth';
import './Style/Userblog.css'; // Import your CSS file for specific blog styling

const Blog = () => {
  const [auth] = useAuth();
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs associated with the user when the component mounts
    if (auth.user && auth.user._id) {
      axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`)
        .then(response => {
          setUserBlogs(response.data);
        })
        .catch(error => {
          console.error('Error fetching user blogs:', error);
        });
    }
  }, [auth.user]);

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      if (newBlogTitle && newBlogContent) {
        // Create a new blog for the user
        await axios.post('http://localhost:5000/blog', {
          title: newBlogTitle,
          content: newBlogContent,
          userId: auth.user._id,
        });

        // Fetch updated blogs associated with the user
        const response = await axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`);
        setUserBlogs(response.data);

        // Clear the input fields
        setNewBlogTitle('');
        setNewBlogContent('');

        console.log('Blog created successfully.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="blog-container">
        <section className="create-blog-section">
          <h2>Create a New Blog</h2>
          <form onSubmit={handleCreateBlog} className="create-blog-form">
            <label htmlFor="blogTitle">Title:</label>
            <input
              type="text"
              id="blogTitle"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />

            <label htmlFor="blogContent">Content:</label>
            <textarea
              id="blogContent"
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">Create Blog</button>
          </form>
        </section>

        <section className="user-blogs-section">
        <h2>Your Blogs</h2>
        <ul className="blog-list">
          {userBlogs.map(blog => (
            <li key={blog._id} className="blog-item">
              <h3>{blog.title}</h3>
              {/* Use dangerouslySetInnerHTML to render HTML tags */}
              <p dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br>') }} />
            </li>
          ))}
        </ul>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;



























/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useAuth } from '../Context/auth';
import './Style/Userblog.css'; // Import your CSS file for specific blog styling

const Blog = () => {
  const [auth] = useAuth();
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs associated with the user when the component mounts
    if (auth.user && auth.user._id) {
      axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`)
        .then(response => {
          setUserBlogs(response.data);
        })
        .catch(error => {
          console.error('Error fetching user blogs:', error);
        });
    }
  }, [auth.user]);

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      if (newBlogTitle && newBlogContent) {
        // Create a new blog for the user
        await axios.post('http://localhost:5000/blog', {
          title: newBlogTitle,
          content: newBlogContent,
          userId: auth.user._id,
        });

        // Fetch updated blogs associated with the user
        const response = await axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`);
        setUserBlogs(response.data);

        // Clear the input fields
        setNewBlogTitle('');
        setNewBlogContent('');

        console.log('Blog created successfully.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="blog-container">
        <section className="create-blog-section">
          <h2>Create a New Blog</h2>
          <form onSubmit={handleCreateBlog} className="create-blog-form">
            <label htmlFor="blogTitle">Title:</label>
            <input
              type="text"
              id="blogTitle"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />

            <label htmlFor="blogContent">Content:</label>
            <textarea
              id="blogContent"
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">Create Blog</button>
          </form>
        </section>

        <section className="user-blogs-section">
          <h2>Your Blogs</h2>
          <ul className="blog-list">
            {userBlogs.map(blog => (
              <li key={blog._id} className="blog-item">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;


*/










































































/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useAuth } from '../Context/auth';

const Blog = () => {
  const [auth] = useAuth();
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs associated with the user when the component mounts
    if (auth.user && auth.user._id) {
      axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`)
        .then(response => {
          setUserBlogs(response.data);
        })
        .catch(error => {
          console.error('Error fetching user blogs:', error);
        });
    }
  }, [auth.user]);

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      if (newBlogTitle && newBlogContent) {
        // Create a new blog for the user
        await axios.post('http://localhost:5000/blog', {
          title: newBlogTitle,
          content: newBlogContent,
          userId: auth.user._id,
        });

        // Fetch updated blogs associated with the user
        const response = await axios.get(`http://localhost:5000/blog?userId=${auth.user._id}`);
        setUserBlogs(response.data);

        // Clear the input fields
        setNewBlogTitle('');
        setNewBlogContent('');

        console.log('Blog created successfully.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h2>Create a New Blog</h2>
        <form onSubmit={handleCreateBlog}>
          <label>Title:
            <input
              type="text"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />
          </label>

          <label>Content:
            <textarea
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-primary">Create Blog</button>
        </form>

        <h2>Your Blogs</h2>
        <ul>
          {userBlogs.map(blog => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog;


*/



















































/*




import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useAuth } from '../Context/auth';

const Blog = () => {
  const [auth] = useAuth();
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      if (newBlogTitle && newBlogContent) {
        // Create a new blog for the user
        await axios.post('http://localhost:5000/blog', {
          title: newBlogTitle,
          content: newBlogContent,
          userId: auth.user._id,
        });

        // Clear the input fields
        setNewBlogTitle('');
        setNewBlogContent('');

        console.log('Blog created successfully.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h2>Create a New Blog</h2>
        <form onSubmit={handleCreateBlog}>
          <label>Title:
            <input
              type="text"
              value={newBlogTitle}
              onChange={(e) => setNewBlogTitle(e.target.value)}
            />
          </label>

          <label>Content:
            <textarea
              value={newBlogContent}
              onChange={(e) => setNewBlogContent(e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-primary">Create Blog</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Blog;


*/